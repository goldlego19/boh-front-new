import React, { Fragment, useState } from "react";
import { DatePicker } from "@atlaskit/datetime-picker";
import ButtonGroup from "@atlaskit/button/button-group";
import Button from "@atlaskit/button/new";
import Form, { Field, FormFooter, FormSection } from "@atlaskit/form";
import Select from "@atlaskit/select";

interface ReportFormProps {
  closeModal: () => void;
}

const clients = [
  { label: "Pk Cuzzons", value: "1" },
  { label: "Onpoint", value: "2" },
  { label: "F1", value: "3" },
  { label: "EcoBank", value: "4" },
];
// sort the clients alphabetically
const filterData = clients.sort((a, b) => a.label.localeCompare(b.label));

export default function ReportForm({ closeModal }: ReportFormProps) {
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);

  return (
    <Form<{ username: string; password: string; remember: boolean }>
      onSubmit={(data) => {
        console.log("form data", data);
        return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
          data.username === "error" ? { username: "IN_USE" } : undefined
        );
      }}
    >
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <FormSection>
            <Field
              aria-required={true}
              name="client"
              label="Client"
              isRequired
              defaultValue=""
            >
              {({ fieldProps }) => (
                <Fragment>
                  <Select
                    inputId="single-select"
                    className="single-select"
                    classNamePrefix="react-select"
                    options={filterData}
                    placeholder="Choose a Client"
                  />
                </Fragment>
              )}
            </Field>
            <Field
              name="startDatePicker-form"
              label="Start date"
              isRequired
              defaultValue=""
            >
              {({ fieldProps }) => (
                <>
                  <DatePicker
                    {...fieldProps}
                    maxDate={new Date().toISOString().split("T")[0]}
                    onChange={(date) => {
                      // Step 2: Update start date on change
                      setStartDate(date);
                      if (fieldProps.onChange) {
                        fieldProps.onChange(date);
                      }
                    }}
                  />
                </>
              )}
            </Field>
            <Field
              name="endDatePicker-form"
              label="End date"
              isRequired
              defaultValue=""
            >
              {({ fieldProps }) => (
                <>
                  <DatePicker
                    {...fieldProps}
                    minDate={startDate}
                    maxDate={new Date().toISOString().split("T")[0]}
                    onChange={(date) => {
                      // Step 2: Update start date on change
                      setEndDate(date);
                      if (fieldProps.onChange) {
                        fieldProps.onChange(date);
                      }
                    }}
                  />
                </>
              )}
            </Field>
          </FormSection>
          <br />
          <FormFooter>
            <ButtonGroup label="Form submit options">
              <Button appearance="subtle" onClick={closeModal}>
                Cancel
              </Button>
              <Button type="submit" appearance="primary" isLoading={submitting}>
                Generate
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}
