interface SignupFooterProps {
  loginLabel: string;
  statusLabel: string;
}

export default function SignupFooter({ loginLabel, statusLabel }: SignupFooterProps) {
  return (
    <div className="mt-xl pt-lg border-t border-outline-variant flex flex-col sm:flex-row sm:justify-between sm:items-center gap-sm text-center sm:text-left">
      <a
        className="font-body-md text-body-md text-on-surface-variant hover:text-solar-orange transition-colors"
        href="#"
        aria-disabled="true"
      >
        {loginLabel}
      </a>
      <a
        className="font-body-sm text-body-sm text-on-surface-variant hover:text-solar-orange transition-colors"
        href="#"
        aria-disabled="true"
      >
        {statusLabel}
      </a>
    </div>
  );
}
