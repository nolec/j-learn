export const metadata = {
  title: "히라가나 (한글 읽기 포함)",
};

export default function HiraganaPage() {
  return (
    <main style={{ padding: 16 }}>
      <h1 style={{ fontSize: 20, margin: "0 0 8px" }}>히라가나 정리</h1>
      <p style={{ margin: "0 0 12px", opacity: 0.8 }}>
        아래는 정리 HTML을 그대로 띄운 화면입니다.{" "}
        <a href="/hiragana-korean.html" target="_blank" rel="noreferrer">
          새 탭으로 열기
        </a>
      </p>
      <iframe
        title="hiragana-korean"
        src="/hiragana-korean.html"
        style={{
          width: "100%",
          height: "85vh",
          border: "1px solid rgba(0,0,0,0.15)",
          borderRadius: 12,
          background: "white",
        }}
      />
    </main>
  );
}



