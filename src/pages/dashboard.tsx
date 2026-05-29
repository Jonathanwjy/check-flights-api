import { useAxios } from "@/hooks/use-axios";
import { Loader2 } from "lucide-react";

export function FlightData() {
  const apiKey = import.meta.env.VITE_API_ACCESS_KEY;
  const apiUrl = `http://api.aviationstack.com/v1/airports?access_key=${apiKey}`;

  // Cukup panggil 1 baris ini!
  const { data, loading, error } = useAxios(apiUrl);

  // Handle tampilan saat loading
  if (loading) {
    return (
      <div>
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  // Handle tampilan jika terjadi error
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  console.log(data);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Data Penerbangan Berhasil Dimuat!
      </h2>

      {/* Contoh menampilkan data JSON mentah ke layar untuk dicek */}
      <pre className=" p-4 rounded-md overflow-auto">
        {JSON.stringify(data?.data?.slice(0, 2), null, 2)}
      </pre>
    </div>
  );
}
