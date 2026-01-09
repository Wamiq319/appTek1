import { redirect } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const target = locale === "ar" ? "saudi-gulf-arabic" : "saudi-gulf";
  redirect(`/${locale}/${target}`);
}
