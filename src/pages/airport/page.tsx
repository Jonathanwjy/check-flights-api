import { useAxios } from "@/hooks/use-axios";
import type { Airport } from "@/types/ariport";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AirportPage() {
  const apiKey = import.meta.env.VITE_API_ACCESS_KEY;
  const apiUrl = `http://api.aviationstack.com/v1/airports?access_key=${apiKey}`;

  // Memanggil custom hook untuk fetch data
  const { data, loading, error } = useAxios(apiUrl);

  const airportList: Airport[] = data?.data || [];

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        {" "}
        <Loader2 className="animate-spin" />
        Memuat Data Airport
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">Terjadi kesalahan: {error}</p>
      </div>
    );
  }

  // 3. Tampilan utama Data Table
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Daftar Bandara</h1>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Bandara
              </th>
              <th scope="col" className="px-6 py-3">
                Kode IATA
              </th>
              <th scope="col" className="px-6 py-3">
                Kode ICAO
              </th>
              <th scope="col" className="px-6 py-3">
                Negara
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {airportList.length > 0 ? (
              airportList.map((airport) => (
                <tr
                  key={airport.id || airport.airport_id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {airport.airport_name}
                  </td>
                  <td className="px-6 py-4">{airport.iata_code || "-"}</td>
                  <td className="px-6 py-4">{airport.icao_code || "-"}</td>
                  <td className="px-6 py-4">{airport.country_name}</td>
                  <td className="px-6 py-4 text-center">
                    {/* Link menuju halaman detail menggunakan ID bandara */}
                    <Link
                      to={`/airports/${airport.id || airport.airport_id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Lihat Detail
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  Data bandara tidak ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
