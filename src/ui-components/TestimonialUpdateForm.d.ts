/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Testimonial } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestimonialUpdateFormInputValues = {
    name?: string;
    avatar?: string;
    testimony?: string;
};
export declare type TestimonialUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    testimony?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialUpdateFormOverridesProps = {
    TestimonialUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    avatar?: FormProps<TextFieldProps>;
    testimony?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestimonialUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestimonialUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testimonial?: Testimonial;
    onSubmit?: (fields: TestimonialUpdateFormInputValues) => TestimonialUpdateFormInputValues;
    onSuccess?: (fields: TestimonialUpdateFormInputValues) => void;
    onError?: (fields: TestimonialUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TestimonialUpdateFormInputValues) => TestimonialUpdateFormInputValues;
    onValidate?: TestimonialUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestimonialUpdateForm(props: TestimonialUpdateFormProps): React.ReactElement;
