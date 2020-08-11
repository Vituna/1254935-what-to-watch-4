export interface SignInProps {
  onSubmit: ({email, password}: {email: string; password: string}) => void;
}
