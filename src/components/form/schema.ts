/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Yup from 'yup'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^(\+?1?\s*\(?(\d{3})\)?[-.\s]?\d{3}[-.\s]?\d{4}|)$/;

export const passwordSchema = Yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must have at least one lowercase character.')
    .matches(/[A-Z]/, 'Password must have at least one uppercase character.')
    .matches(
        /[a-zA-Z]+[^a-zA-Z\s]+/, "Password must have at least 1 number or special char (@,!,#, etc)."
    );

export const emailSchema = Yup.string().matches(EMAIL_REGEX, 'Invalid email format.').required('A valid email is required.');