import { useCallback, useState } from "react";

export default function UploadPanel() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = form.elements.namedItem("file") as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (!file) {
      setStatus("Please select a file.");
      return;
    }
    setStatus("Uploading…");
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: (() => {
          const fd = new FormData();
          fd.append("file", file);
          return fd;
        })(),
      });
      if (!res.ok) throw new Error(`Upload failed: ${res.status}`);
      const data = (await res.json()) as { filename: string; status: string };
      setStatus(`Uploaded: ${data.filename}`);
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Upload failed");
    }
  }, []);

  return (
    <section className="rounded border border-slate-300 bg-slate-50 p-4">
      <h3 className="mb-2 font-semibold">Upload</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" className="mb-2 block" />
        <button type="submit" className="rounded bg-slate-800 px-3 py-1 text-white hover:bg-slate-700">
          Upload
        </button>
      </form>
      {status != null && <p className="mt-2 text-sm text-slate-600">{status}</p>}
    </section>
  );
}
