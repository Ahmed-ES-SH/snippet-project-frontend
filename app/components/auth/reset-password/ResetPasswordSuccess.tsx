"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

interface ResetPasswordSuccessProps {
  message: string;
  returnLabel: string;
}

export default function ResetPasswordSuccess({
  message,
  returnLabel,
}: ResetPasswordSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex flex-col items-center text-center space-y-lg py-xl"
    >
      <div className="w-16 h-16 rounded-full bg-success/10 border border-success/30 flex items-center justify-center">
        <FaCheckCircle className="w-8 h-8 text-success" />
      </div>

      <div className="space-y-sm">
        <h2 className="font-headline-md text-headline-md text-on-surface">
          ACCESS_KEY_ROTATED
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[320px]">
          {message}
        </p>
      </div>

      <div className="bg-surface-lowest border border-outline-variant rounded-sm p-md w-full max-w-[320px]">
        <p className="font-code-md text-code-md text-on-surface-variant">
          {">"} Access key successfully rotated
        </p>
        <p className="font-code-md text-code-md text-on-surface-variant">
          {">"} New credentials are now active
        </p>
        <p className="font-code-md text-code-md text-success">
          {">"} STATUS: KEY_ROTATION_COMPLETE
        </p>
      </div>

      <Link
        href="/login"
        className="font-label-md text-label-md text-on-surface-variant/60 hover:text-solar-orange transition-colors uppercase"
      >
        {returnLabel}
      </Link>
    </motion.div>
  );
}
