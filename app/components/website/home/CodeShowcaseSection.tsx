import { getTranslations } from "@/app/helpers/global/getTranslations";
import { getIconComponent } from "@/app/helpers/global/getIconComponent";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface CodeShowcaseSectionProps {
  locale: LocaleType;
}

export default async function CodeShowcaseSection({ locale }: CodeShowcaseSectionProps) {
  const t = getTranslations(locale, "Home") as Record<string, Record<string, string>>;

  const snippets = [
    {
      language: t.codeShowcase.snippet1Language,
      tags: [t.codeShowcase.snippet1Tag1, t.codeShowcase.snippet1Tag2, t.codeShowcase.snippet1Tag3],
      lines: [
        { num: 1, code: <><span className="text-success">import</span> {"{ Injectable }"} <span className="text-success">from</span> <span className="text-warning">&apos;@nestjs/common&apos;</span>;</> },
        { num: 2, code: <><span className="text-success">import</span> {"{ AuthGuard }"} <span className="text-success">from</span> <span className="text-warning">&apos;@nestjs/passport&apos;</span>;</> },
        { num: 3, code: <></> },
        { num: 4, code: <><span className="text-outline">@Injectable()</span></> },
        { num: 5, code: <><span className="text-success">export class</span> <span className="text-on-surface">JwtAuthGuard</span> <span className="text-success">extends</span> <span className="text-on-surface">AuthGuard</span>(<span className="text-warning">&apos;jwt&apos;</span>) {"{"}</> },
        { num: 6, code: <>{"  "}<span className="text-success">async</span> <span className="text-on-surface">canActivate</span>(context: ExecutionContext) {"{"}</> },
        { num: 7, code: <>{"    "}<span className="text-success">const</span> activate = <span className="text-success">await super</span>.<span className="text-on-surface">canActivate</span>(context);</> },
        { num: 8, code: <>{"    "}<span className="text-success">const</span> request = context.<span className="text-on-surface">switchToHttp</span>().<span className="text-on-surface">getRequest</span>();</> },
        { num: 9, code: <>{"    "}<span className="text-outline">// Validate session cookie</span></> },
        { num: 10, code: <>{"    "}<span className="text-success">return</span> activate;</> },
        { num: 11, code: <>{"  }"}</> },
        { num: 12, code: <>{"}"}</> },
      ],
    },
    {
      language: t.codeShowcase.snippet2Language,
      tags: [t.codeShowcase.snippet2Tag1, t.codeShowcase.snippet2Tag2, t.codeShowcase.snippet2Tag3],
      lines: [
        { num: 1, code: <><span className="text-success">@router</span>.<span className="text-on-surface">post</span>(<span className="text-warning">&quot;/snippets&quot;</span>, response_model=SnippetResponse)</> },
        { num: 2, code: <><span className="text-success">async def</span> <span className="text-on-surface">create_snippet</span>(</> },
        { num: 3, code: <>{"    "}payload: CreateSnippet,</> },
        { num: 4, code: <>{"    "}db: AsyncSession = <span className="text-on-surface">Depends</span>(get_db),</> },
        { num: 5, code: <>{"    "}user: User = <span className="text-on-surface">Depends</span>(get_current_user)</> },
        { num: 6, code: <>):</> },
        { num: 7, code: <>{"    "}snippet = <span className="text-on-surface">Snippet</span>(**payload.<span className="text-on-surface">dict</span>(), owner_id=user.id)</> },
        { num: 8, code: <>{"    "}db.<span className="text-on-surface">add</span>(snippet)</> },
        { num: 9, code: <>{"    "}<span className="text-success">await</span> db.<span className="text-on-surface">commit</span>()</> },
        { num: 10, code: <>{"    "}<span className="text-success">return</span> snippet</> },
      ],
    },
    {
      language: t.codeShowcase.snippet3Language,
      tags: [t.codeShowcase.snippet3Tag1, t.codeShowcase.snippet3Tag2, t.codeShowcase.snippet3Tag3],
      lines: [
        { num: 1, code: <><span className="text-success">export function</span> <span className="text-on-surface">useDebounce</span>&lt;<span className="text-on-surface">T</span>&gt;(value: <span className="text-on-surface">T</span>, delay: <span className="text-on-surface">number</span>): <span className="text-on-surface">T</span> {"{"}</> },
        { num: 2, code: <>{"  "}<span className="text-success">const</span> [debouncedValue, setDebouncedValue] = <span className="text-on-surface">useState</span>(value);</> },
        { num: 3, code: <>{"  "}<span className="text-on-surface">useEffect</span>(() =&gt; {"{"}</> },
        { num: 4, code: <>{"    "}<span className="text-success">const</span> timer = <span className="text-on-surface">setTimeout</span>(() =&gt; <span className="text-on-surface">setDebouncedValue</span>(value), delay);</> },
        { num: 5, code: <>{"    "}<span className="text-success">return</span> () =&gt; <span className="text-on-surface">clearTimeout</span>(timer);</> },
        { num: 6, code: <>{"  "}, [value, delay]);</> },
        { num: 7, code: <>{"  "}<span className="text-success">return</span> debouncedValue;</> },
        { num: 8, code: <>{"}"}</> },
      ],
    },
  ];

  return (
    <section className="px-margin-desktop py-xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
            {t.codeShowcase.title}
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            {t.codeShowcase.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          {snippets.slice(0, 2).map((snippet, i) => (
            <SnippetCard key={i} snippet={snippet} />
          ))}
          <div className="md:col-span-2">
            <SnippetCard snippet={snippets[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SnippetCard({ snippet }: { snippet: { language: string; tags: string[]; lines: { num: number; code: React.ReactNode }[] } }) {
  const CopyIcon = getIconComponent("FaCopy");

  return (
    <div className="bg-surface-low border border-outline-variant rounded-lg overflow-hidden hover:border-solar-orange/50 transition-colors group">
      <div className="bg-[#0C0E14] p-md font-code-md text-code-md overflow-x-auto">
        <div className="flex">
          <div className="text-outline text-end pe-md border-r border-outline-variant select-none shrink-0">
            {snippet.lines.map((line) => (
              <div key={line.num}>{String(line.num).padStart(2, "0")}</div>
            ))}
          </div>
          <div className="ps-md text-primary whitespace-pre">
            {snippet.lines.map((line) => (
              <div key={line.num}>{line.code}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-surface-container-low px-md py-sm border-t border-outline-variant flex items-center justify-between">
        <div className="flex items-center gap-sm flex-wrap">
          <span className="font-code-md text-[10px] font-bold text-solar-orange bg-surface-container px-sm py-xs rounded border border-outline-variant">
            {snippet.language}
          </span>
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-container px-sm py-xs text-[10px] font-bold rounded border border-outline-variant text-on-surface-variant"
            >
              #{tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="text-on-surface-variant hover:text-solar-orange transition-colors"
          aria-label="Copy code"
        >
          <CopyIcon className="text-sm" />
        </button>
      </div>
    </div>
  );
}
