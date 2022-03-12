import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { MapboxGeoJSONFeature } from "react-map-gl";
import * as OSM from "osm-api";
import { openReverseGeocoder } from "@geolonia/open-reverse-geocoder";
import { LoginButton } from "../Header/LoggedInButton";
import { CoordinatesTextView } from "../Feature/CoordinatesTextView";
import { AddressTextView } from "../Feature/AddressTextView";
import {
  AddressDetailFieldList,
  AddressMainFieldList,
  AddressPostcodeField,
} from "../Feature/fields";

const AddressInputField: React.VFC<{
  feature: MapboxGeoJSONFeature;
  fieldName: string;
  label?: string;
  placeholder?: string;
}> = ({ feature, fieldName, label, placeholder }) => {
  const [value, setValue] = useState(feature.properties?.[fieldName]);
  const onChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);
  return (
    <div className="w-full md:w-1/6 py-1 px-2 mb-6 md:mb-0">
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={fieldName}
      >
        {label ? label : fieldName}
      </label>
      <input
        className="appearance-none block w-full leading-tight rounded py-2 px-1 border border-gray-300 bg-gray-100 text-black placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:bg-white focus:border-gray-500"
        id={fieldName}
        name={fieldName}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export const AddressEditor: React.VFC<{
  feature: MapboxGeoJSONFeature;
  onCancel: () => void;
}> = ({ feature, onCancel }) => {
  const center = JSON.parse(feature.properties?.center);

  const [submitting, setSubmitting] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(OSM.isLoggedIn());
  }, []);

  const onLoadAddress = useCallback(async () => {
    console.info("openReverseGeocoder", [center[0], center[1]]);
    const result = await openReverseGeocoder([center[0], center[1]]);
    console.info("openReverseGeocoder", result);
  }, []);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body: any = {};
    formData.forEach((value, key) => (body[key] = value));
    console.info(JSON.stringify(body, null, 2));
    setSubmitting(false);
  }, []);

  return (
    <div>
      {feature.properties && (
        <>
          <div>
            OSM:{" "}
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              href={"https://www.openstreetmap.org/" + feature.properties.id}
              target="_blank"
            >
              {feature.properties.id}
            </a>
            {" | "}
            <CoordinatesTextView feature={feature} />
            {" | "}
            <span>
              Address:{" "}
              <span className="underline">
                <AddressTextView feature={feature} />
              </span>
            </span>
          </div>
          <form onSubmit={onSubmit}>
            <div className="flex flex-wrap">
              <AddressInputField
                feature={feature}
                fieldName={AddressPostcodeField.key}
                label={AddressPostcodeField.displayName}
                placeholder={AddressPostcodeField.placeholder}
              />
              {AddressMainFieldList.map((field) => {
                return (
                  <AddressInputField
                    key={field.key}
                    feature={feature}
                    fieldName={field.key}
                    label={field.displayName}
                    placeholder={field.placeholder}
                  />
                );
              })}
            </div>
            <div className="flex flex-wrap">
              {AddressDetailFieldList.map((field) => {
                return (
                  <AddressInputField
                    key={field.key}
                    feature={feature}
                    fieldName={field.key}
                    label={field.displayName}
                    placeholder={field.placeholder}
                  />
                );
              })}
            </div>
            <div className="flex flex-wrap">
              <div className="w-full py-2 px-2 mb-6 md:mb-0">
                <button
                  type="button"
                  onClick={onCancel}
                  className="button rounded mr-4 py-2 px-3  bg-gray-200 text-red-600 hover:text-red-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={onLoadAddress}
                  className="button rounded mr-4 py-2 px-3 bg-green-300 text-gray-800 hover:text-white"
                >
                  Load address from coordinates (work in progress...)
                </button>
                <button
                  disabled={!loggedIn || submitting}
                  className="button rounded mr-2 py-2 px-3 bg-blue-300 text-gray-800 disabled:bg-blue-100 disabled:text-gray-400 hover:text-white"
                >
                  Submit to OpenStreetMap (work in progress...)
                </button>
                {!loggedIn && (
                  <>
                    <span className="mr-2 underline text-red-600">
                      Require logged in before you submit data to OpenStreetMap
                    </span>
                    <LoginButton />
                  </>
                )}
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};