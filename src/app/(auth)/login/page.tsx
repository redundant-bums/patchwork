import { AuthForm } from "../_components/AuthForm";
import { AuthHeader } from "../_components/AuthHeader";
import { AuthPrompt } from "../_components/AuthPrompt";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <AuthHeader
        title="Welcome"
        description="Enter your email and password to sign in"
      />
      <AuthForm mode="login" />
      <AuthPrompt
        message="Don't have an account?"
        actionText="Sign up"
        path="/signup"
      />
    </div>
  );
}
