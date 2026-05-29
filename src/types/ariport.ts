export interface Airport {
  id: string;
  airport_id: number;
  airport_name: string;
  iata_code: string;
  icao_code: string;
  country_name: string;
  timezone: string;
}

export interface AirportProps {
  airports: Airport[];
}

export interface AirportDetailProps extends Airport {}
