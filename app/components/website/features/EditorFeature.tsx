import { getTranslations } from "@/app/helpers/global/getTranslations";
import { LocaleType } from "@/app/hooks/global/useLocale";

interface EditorFeatureProps {
  locale: LocaleType;
}

export default async function EditorFeature({ locale }: EditorFeatureProps) {
  const t = getTranslations(locale, "Features") as Record<
    string,
    Record<string, string>
  >;

  return (
    <section className="px-gutter md:px-margin-desktop py-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <div className="order-2 lg:order-1">
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
                <span className="font-code-md text-code-md text-solar-orange">
                  {t.editor.language}
                </span>
              </div>

              {/* Code Area */}
              <div className="bg-[#0C0E14] p-md font-code-md text-code-md overflow-x-auto">
                <div className="flex">
                  <div className="text-outline text-end pe-md border-r border-outline-variant select-none shrink-0">
                    {Array.from({ length: 14 }, (_, i) => (
                      <div key={i}>{String(i + 1).padStart(2, "0")}</div>
                    ))}
                  </div>
                  <div className="ps-md text-primary whitespace-pre">
                    <div>
                      <span className="text-success">
                        {t.editor.line1Import}
                      </span>{" "}
                      {"{ Injectable }"}{" "}
                      <span className="text-success">{t.editor.line1From}</span>{" "}
                      <span className="text-warning">
                        {t.editor.line1Module}
                      </span>
                      ;
                    </div>
                    <div>
                      <span className="text-success">
                        {t.editor.line2Import}
                      </span>{" "}
                      {"{ AuthGuard }"}{" "}
                      <span className="text-success">{t.editor.line2From}</span>{" "}
                      <span className="text-warning">
                        {t.editor.line2Module}
                      </span>
                      ;
                    </div>
                    <div />
                    <div>
                      <span className="text-outline">
                        {t.editor.line5Decorator}
                      </span>
                    </div>
                    <div>
                      <span className="text-success">
                        {t.editor.line6Keyword}
                      </span>{" "}
                      <span className="text-on-surface">
                        {t.editor.line6Name}
                      </span>{" "}
                      <span className="text-success">
                        {t.editor.line6Extends}
                      </span>{" "}
                      <span className="text-on-surface">
                        {t.editor.line6Base}
                      </span>
                      (<span className="text-warning">{t.editor.line6Arg}</span>
                      ) {"{"}
                    </div>
                    <div>
                      {"  "}
                      <span className="text-success">
                        {t.editor.line7Keyword}
                      </span>{" "}
                      <span className="text-on-surface">
                        {t.editor.line7Method}
                      </span>
                      (context: ExecutionContext) {"{"}
                    </div>
                    <div>
                      {"    "}
                      <span className="text-success">
                        {t.editor.line8Keyword}
                      </span>{" "}
                      <span className="text-on-surface">
                        {t.editor.line8Var}
                      </span>{" "}
                      ={" "}
                      <span className="text-success">{t.editor.line8Call}</span>
                      .<span className="text-on-surface">canActivate</span>
                      (context);
                    </div>
                    <div>
                      {"    "}
                      <span className="text-success">
                        {t.editor.line9Keyword}
                      </span>{" "}
                      <span className="text-on-surface">
                        {t.editor.line9Var}
                      </span>{" "}
                      ={" "}
                      <span className="text-on-surface">
                        {t.editor.line9Chain}
                      </span>
                      ;
                    </div>
                    <div />
                    <div>
                      {"    "}
                      <span className="text-outline">
                        {t.editor.line10Comment}
                      </span>
                    </div>
                    <div>
                      {"    "}
                      <span className="text-success">
                        {t.editor.line11Keyword}
                      </span>{" "}
                      <span className="text-on-surface">
                        {t.editor.line11Var}
                      </span>
                      ;
                    </div>
                    <div>{"  }"}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>

              {/* Editor Footer */}
              <div className="bg-surface-container-low px-md py-sm border-t border-outline-variant flex items-center gap-md">
                <div className="flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-solar-orange" />
                  <span className="text-[10px] uppercase font-bold text-outline">
                    {t.editor.statusReady}
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
        </div>

        <div className="order-1 lg:order-2">
          <span className="font-label-md text-label-md text-solar-orange uppercase tracking-widest mb-sm block">
            {t.editor.subtitle}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            {t.editor.title}
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            {t.editor.description}
          </p>
        </div>
      </div>
    </section>
  );
}
