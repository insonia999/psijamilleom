import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white text-[#4a4444] font-sans antialiased selection:bg-[#f2ecf9] selection:text-[#c9b8dc]">
      <div className="max-w-[820px] mx-auto px-6 py-16 md:py-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#c9b8dc] text-[13px] font-bold tracking-wide uppercase hover:text-[#a18db8] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao site
        </a>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-[#f2ecf9] text-[#c9b8dc] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-[#c9b8dc] text-xs font-bold tracking-[2.4px] uppercase">
            Transparência &amp; LGPD
          </span>
        </div>

        <h1 className="font-serif text-[32px] md:text-[42px] font-normal leading-tight text-[#4a4444] mb-8 tracking-tight">
          Política de Privacidade
        </h1>

        <div className="space-y-8 font-sans text-[16px] leading-relaxed text-[#6b6560]">
          <p>
            Esta política tem como objetivo esclarecer, de forma simples e transparente, como este site trata as informações dos seus visitantes, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
          </p>

          <section>
            <h2 className="font-serif text-[20px] md:text-[22px] font-normal text-[#4a4444] mb-3">
              1. Caráter institucional do site
            </h2>
            <p>
              Este site tem caráter exclusivamente institucional e informativo, apresentando o trabalho da psicóloga Jamille Ovadia Moraes. Ele não coleta, armazena, comercializa ou compartilha dados pessoais dos visitantes, e não utiliza cookies de rastreamento, pixels de análise de comportamento ou qualquer tecnologia de monitoramento para fins publicitários.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[20px] md:text-[22px] font-normal text-[#4a4444] mb-3">
              2. Formulários e links de contato
            </h2>
            <p>
              Os botões de contato presentes no site redirecionam diretamente para o WhatsApp ou para o e-mail da profissional. Qualquer informação compartilhada nesses canais (nome, telefone, mensagem) é fornecida voluntariamente pelo visitante e fica sob a responsabilidade das respectivas plataformas (WhatsApp, e-mail), não sendo armazenada neste site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[20px] md:text-[22px] font-normal text-[#4a4444] mb-3">
              3. Sigilo profissional e dados clínicos
            </h2>
            <p>
              Os contatos realizados via WhatsApp ou Google Meet, assim como o conteúdo e os dados decorrentes das sessões de psicoterapia, seguem rigorosamente o Código de Ética Profissional do Psicólogo e as diretrizes de sigilo estabelecidas pelo Conselho Regional de Psicologia (CRP-04), em total conformidade com a LGPD aplicada a dados de saúde. Nenhuma informação clínica é divulgada, compartilhada ou utilizada para finalidade diversa do atendimento terapêutico.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[20px] md:text-[22px] font-normal text-[#4a4444] mb-3">
              4. Serviços de terceiros
            </h2>
            <p>
              O site utiliza incorporação (embed) do Google Maps apenas para exibir a localização do consultório. O uso desse serviço está sujeito à política de privacidade do próprio Google, sem qualquer coleta de dados adicional realizada por este site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[20px] md:text-[22px] font-normal text-[#4a4444] mb-3">
              5. Alterações desta política
            </h2>
            <p>
              Esta política pode ser atualizada periodicamente para refletir eventuais mudanças no site. Recomendamos a consulta ocasional desta página.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[20px] md:text-[22px] font-normal text-[#4a4444] mb-3">
              6. Contato
            </h2>
            <p>
              Em caso de dúvidas sobre esta política, entre em contato pelo e-mail{" "}
              <a
                href="mailto:psijamilleom@gmail.com"
                className="text-[#c9b8dc] font-medium hover:text-[#a18db8] transition-colors"
              >
                psijamilleom@gmail.com
              </a>
              .
            </p>
          </section>

          <p className="text-[13px] text-[#bfb5a8] pt-4 border-t border-[#f5efe7]">
            Última atualização: julho de 2026.
          </p>
        </div>
      </div>
    </div>
  );
}
