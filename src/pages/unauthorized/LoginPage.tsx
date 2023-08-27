import { useState } from "react";
import { Auth } from "../../auth/AuthContext";
import { Box, Divider, Paper, Stack } from "@mui/material";
import { EmailOutlined, PasswordOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import RHFTextField from "../../components/form/RHFTextField";
import FormProvider from "../../components/form/FormProvider";
import { signInWithEmailAndPassword, validatePassword } from "firebase/auth";
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
        mode: 'onChange',
        reValidateMode: 'onBlur',
        shouldFocusError: true,
    });
    const { handleSubmit,
        setError,
        formState: {
            isSubmitting,
            isSubmitSuccessful,
            errors: { password: passwordError },
        },
        resetField,
    } = methods;

    const onSubmit = handleSubmit(
        async ({ email, password }) => {
            const {
                isValid,
                meetsMaxPasswordLength,
                meetsMinPasswordLength
            } = await validatePassword(Auth, password)

            if (
                !isValid ||
                !meetsMaxPasswordLength ||
                !meetsMinPasswordLength
            ) {
                setError('password', { message: 'Please enter a valid password.' });
                return
            }

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
                    <Stack width={300} spacing={3}>
                        <RHFTextField
                            fullWidth
                            InputProps={{
                                startAdornment: <EmailOutlined />,
                                placeholder: 'Email',
                                readOnly: true,
                                sx: {
                                    borderRadius: 3,
                                },
                                inputProps: {
                                    sx: {
                                        ml: 1,
                                        '-webkit-background-clip': 'text !important'
                                    }
                                }
                            }}
                            label='Email'
                            type='email'
                            name='email'
                            disabled
                        />
                        <RHFTextField
                            fullWidth
                            autoFocus
                            InputLabelProps={{ required: true }}
                            InputProps={{
                                startAdornment: <PasswordOutlined />,
                                endAdornment:
                                    showPassword
                                        ? <VisibilityOff onClick={handleToggleViewPassword} />
                                        : <Visibility onClick={handleToggleViewPassword} />,
                                placeholder: 'Password',
                                sx: { borderRadius: 3 },
                                inputProps: {
                                    sx: {
                                        mx: 1,
                                        '-webkit-background-clip': 'text !important'
                                    }
                                }
                            }}
                            label='Password'
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            onKeyDown={(event) => {
                                if (event.key === 'Escape') {
                                    resetField('password')
                                }
                            }} />
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
