// app/@modal/(.)signup/page.tsx
"use client";

import { useRouter } from "next/navigation";

export default function SignUpModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <button onClick={handleClose} className="absolute right-4 top-4">
          Close (X)
        </button>

        <h2 className="mb-4 text-xl font-bold">Create an Account</h2>
        <div />
      </div>
    </div>
  );
}
