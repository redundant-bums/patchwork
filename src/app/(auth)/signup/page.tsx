import { AuthForm } from "../_components/AuthForm";
import { AuthHeader } from "../_components/AuthHeader";
import { AuthPrompt } from "../_components/AuthPrompt";

export default function SignupPage() {
  return (
    <div className="space-y-6">
      <AuthHeader
        title="Create an account"
        description="Enter your details to get started"
      />
      <AuthForm mode="signup" />
      <AuthPrompt
        message="Already have an account?"
        actionText="Login"
        path="/login"
      />
    </div>
  );
}
