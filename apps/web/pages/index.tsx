export default function Web() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const text = e.target.text.value;
    const apiUrl: URL = new URL(process.env.NEXT_PUBLIC_API_URL as string);
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Your message:
          <input type="text" name="text" />
          <button>Send</button>
        </label>
      </form>
    </main>
  );
}
