import "./globals.css";

export const metadata = {
  title: "j-learn",
  description: "일본어 학습용 미니 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}


