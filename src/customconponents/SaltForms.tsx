<link rel="stylesheet" href="stylessheets/signupform.css" />
import { Trans } from "react-i18next";
import type { ReactElement } from "react";
import {
  Button,
  Code,
  Display1,
  Display2,
  Display3,
  H1,
  H2,
  H3,
  H4,
  Label,
  StackLayout,
  Text,
  TextAction,
  TextNotation,
    FlowLayout,
    FormField,
    FormFieldHelperText,
    FormFieldLabel,
    Input,
  } from "@salt-ds/core";
  
  
  export const SignUpForm = (): ReactElement => (
    <FlowLayout id='forms' style={{ width: "256px" }}>
          <FormField >
            <FormFieldLabel className="form-title" ><H2><Trans i18nKey='firstName'>First Name</Trans></H2></FormFieldLabel>
            <Input id="first-name" className="SignupForm" placeholder="First Name" />
            <FormFieldHelperText><H3>Legal first name</H3></FormFieldHelperText>
          </FormField>

          <FormField>
            <FormFieldLabel className="form-title"><H2><Trans i18nKey='lastName'>Last Name</Trans></H2></FormFieldLabel>
            <Input id="last-name" className="SignupForm" placeholder="Last Name" />
            <FormFieldHelperText><H3>Legal last name</H3></FormFieldHelperText>
          </FormField>
          <FormField>
            <FormFieldLabel className="form-title"><H2><Trans i18nKey='jobTitle'>Job Title</Trans></H2></FormFieldLabel>
            <Input id="job-title" className="SignupForm" placeholder="Job Title" />
            <FormFieldHelperText><H3>Title of your job</H3></FormFieldHelperText>
          </FormField>
          <FormField>
            <FormFieldLabel className="form-title"><H2><Trans i18nKey='companyName'>Company Name</Trans></H2></FormFieldLabel>
            <Input id="company" className="SignupForm" placeholder="Company" />
            <FormFieldHelperText><H3>Name of your company</H3></FormFieldHelperText>
          </FormField>
<Button sentiment="accented" className="SignupForm" ><Trans i18nKey='signUp'>Sign up</Trans></Button>

        </FlowLayout>
  );
