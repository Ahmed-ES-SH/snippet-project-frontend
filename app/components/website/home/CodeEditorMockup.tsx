"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface CodeEditorMockupProps {
  locale: LocaleType;
}

const codeSnippets = [
  `import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext) {
    const activate = await super.canActivate(context);
    const request = context.switchToHttp().getRequest();

    // Validate session cookie
    return activate;
  }
}`,
  `@router.post("/snippets", response_model=SnippetResponse)
async def create_snippet(
    payload: CreateSnippet,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user)
):
    snippet = Snippet(**payload.dict(), owner_id=user.id)
    db.add(snippet)
    await db.commit()
    return snippet`,
  `export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}`,
];

export default function CodeEditorMockup({ locale }: CodeEditorMockupProps) {
  const t = getTranslations(locale, "Home") as Record<string, Record<string, string>>;
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!typedRef.current) return;

    typedInstance.current = new Typed(typedRef.current, {
      strings: codeSnippets,
      typeSpeed: 8,
      backSpeed: 3,
      backDelay: 3000,
      loop: true,
      showCursor: true,
      cursorChar: "█",
      smartBackspace: true,
      onStart: () => {
        setIsTyping(true);
      },
      onComplete: () => {
        setIsTyping(false);
      },
      onStringTyped: () => {
        setIsTyping(false);
      },
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  const handleReplay = () => {
    typedInstance.current?.destroy();
    if (!typedRef.current) return;

    typedInstance.current = new Typed(typedRef.current, {
      strings: codeSnippets,
      typeSpeed: 8,
      backSpeed: 3,
      backDelay: 3000,
      loop: true,
      showCursor: true,
      cursorChar: "█",
      smartBackspace: true,
    });
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-solar-orange/50 to-transparent blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
      <div className="relative bg-surface-low border border-outline-muted rounded-xl overflow-hidden shadow-2xl">
        {/* Editor Header */}
        <div className="bg-surface-container-low px-md py-sm flex justify-between items-center border-b border-outline-variant">
          <div className="flex items-center gap-sm">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-error/40" />
              <div className="w-3 h-3 rounded-full bg-warning/40" />
              <div className="w-3 h-3 rounded-full bg-success/40" />
            </div>
            <span className="font-code-md text-code-md text-on-surface-variant ms-md">
              {t.editor.fileName}
            </span>
          </div>
          <div className="flex items-center gap-md">
            <span className="font-code-md text-code-md text-solar-orange">
              {t.editor.language}
            </span>
            <button
              type="button"
              onClick={handleReplay}
              className="text-on-surface-variant hover:text-solar-orange transition-colors cursor-pointer"
              aria-label="Replay animation"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Code Area */}
        <div className="bg-[#0C0E14] p-md h-[400px] font-code-md text-code-md flex overflow-hidden">
          <div className="text-outline text-end pe-md border-e border-outline-variant select-none">
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i + 1}>
                {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
          <div className="ps-md text-primary overflow-x-auto whitespace-pre flex-1">
            <span
              ref={typedRef}
              className="[&_.typed-cursor]:text-solar-orange [&_.typed-cursor]:font-bold [&_.typed-cursor]:animate-pulse"
            />
          </div>
        </div>

        {/* Editor Footer */}
        <div className="bg-surface-container-low px-md py-sm border-t border-outline-variant flex items-center gap-md">
          <div className="flex items-center gap-xs">
            <span className={`w-2 h-2 rounded-full ${isTyping ? "bg-solar-orange animate-pulse" : "bg-success"}`} />
            <span className="text-[10px] uppercase font-bold text-outline">
              {isTyping ? "Typing..." : t.editor.status}
            </span>
          </div>
          <div className="flex gap-sm">
            <span className="bg-surface-container px-sm py-xs text-[10px] font-bold rounded border border-outline-variant">
              {t.editor.tagAuth}
            </span>
            <span className="bg-surface-container px-sm py-xs text-[10px] font-bold rounded border border-outline-variant">
              {t.editor.tagNestjs}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
