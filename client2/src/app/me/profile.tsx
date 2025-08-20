"use client";

import { useAppContext } from "@/app/AppProvider";
import envConfig from "@/config";
import { useEffect } from "react";

export default function Profile() {
  const { sessionToken } = useAppContext();

  useEffect(() => {
    const fetchProfile = async () => {
      await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/account/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
      }).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) {
          throw data;
        }
        return data;
      });
    };
    fetchProfile();
  }, [sessionToken]);

  return <div>profile</div>;
}
