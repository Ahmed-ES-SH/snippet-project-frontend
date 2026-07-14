"use client";

import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

interface ForgotPasswordSuccessProps {
  message: string;
  returnLabel: string;
}

export default function ForgotPasswordSuccess({
  message,
  returnLabel,
}: ForgotPasswordSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex flex-col items-center text-center space-y-lg py-xl"
    >
      <div className="w-16 h-16 rounded-full bg-solar-orange/10 border border-solar-orange/30 flex items-center justify-center">
        <FaShieldAlt className="w-8 h-8 text-solar-orange" />
      </div>

      <div className="space-y-sm">
        <h2 className="font-headline-md text-headline-md text-on-surface">
          RECOVERY_SIGNAL_DISPATCHED
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-[320px]">
          {message}
        </p>
      </div>

      <div className="bg-surface-lowest border border-outline-variant rounded-sm p-md w-full max-w-[320px]">
        <p className="font-code-md text-code-md text-on-surface-variant">
          {">"} Recovery coordinates transmitted to endpoint
        </p>
        <p className="font-code-md text-code-md text-on-surface-variant">
          {">"} Check inbox for activation sequence
        </p>
        <p className="font-code-md text-code-md text-solar-orange">
          {">"} STATUS: PENDING_CONFIRMATION
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
