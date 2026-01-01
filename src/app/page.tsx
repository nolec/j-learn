import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 16 }}>
      <h1 style={{ margin: "0 0 8px" }}>j-learn</h1>
      <p style={{ margin: "0 0 12px", opacity: 0.8 }}>
        일본어(여행) 학습용 페이지 모음
      </p>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        <li>
          <Link href="/hiragana">히라가나 정리(한글 읽기 포함)</Link>
        </li>
      </ul>
    </main>
  );
}


