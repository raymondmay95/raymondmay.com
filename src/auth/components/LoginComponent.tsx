import { useState } from "react";
import { Auth } from "../AuthContext";
import { Box, Divider, IconButton, Paper, Stack } from "@mui/material";
import { EmailOutlined, PasswordOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import RHFTextField from "../../components/form/RHFTextField";
import FormProvider from "../../components/form/FormProvider";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { emailSchema, passwordSchema } from "../../components/form/schema";

const defaultValues = {
    email: 'raymond.may.95@outlook.com',
    password: ''
};

const resolver = Yup.object().shape({
    email: emailSchema,
    password: passwordSchema
});
export function LoginComponent() {
    const [showPassword, setShowPassword] = useState(false);
    const methods = useForm({
        defaultValues,
        resolver: yupResolver(resolver),
        mode: 'all',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });
    const { handleSubmit, setError, formState: { isSubmitting, isSubmitSuccessful, errors: { password: passwordError } } } = methods;
    const onSubmit = handleSubmit(
        async ({ email, password }) => {
            await signInWithEmailAndPassword(Auth, email, password).then(({ user }) => {
                // Success will be handled in AuthContext
            }).catch((error) => {
                console.error(error);
                setError('password', { message: 'Please enter the correct password.' });
            });
        });
    const handleToggleViewPassword = () => {
        setShowPassword(prev => !prev);
    };
    return (
        <Box
            sx={{
                height: '86vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    borderRadius: 5,
                    bgcolor: 'transparent',
                    border: (theme) => `1px solid ${theme.palette.divider}`
                }}
            >
                <FormProvider methods={methods} onSubmit={onSubmit}>
                    <img
                        loading="eager"
                        src='/assets/Raymond-Arthur_May.svg'
                        alt='loading signature'
                        width={300}
                        height='auto' />
                    <Stack minWidth={300} spacing={3}>
                        <RHFTextField
                            InputProps={{
                                startAdornment: <EmailOutlined sx={{ mr: 1 }} />,
                                placeholder: 'Email',
                                readOnly: true,
                                sx: { borderRadius: 3 }
                            }}
                            label='Email'
                            type='email'
                            name='email' />
                        <RHFTextField
                            InputLabelProps={{ required: true }}
                            InputProps={{
                                startAdornment: <PasswordOutlined sx={{ mr: 1 }} />,
                                endAdornment: <IconButton onClick={handleToggleViewPassword}>
                                    {showPassword
                                        ? <VisibilityOff />
                                        : <Visibility />}
                                </IconButton>,

                                placeholder: 'Password',
                                sx: { borderRadius: 3 }
                            }}
                            label='Password'
                            type={showPassword ? 'text' : 'password'}
                            name='password' />
                        <Stack spacing={1}>
                            <Divider light />
                            <LoadingButton
                                loading={isSubmitting}
                                color={isSubmitSuccessful
                                    ? 'success'
                                    : passwordError
                                        ? 'error'
                                        : 'inherit'}
                                type="submit"
                            >
                                Continue
                            </LoadingButton>
                        </Stack>
                    </Stack>
                </FormProvider>
            </Paper>
        </Box>
    );
}
