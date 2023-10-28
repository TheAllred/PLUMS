import SettingsForm from "@/components/settingsForm";
import React, { useState } from "react";

export default function Settings() {
  return (
    <>
      <div>
        <h2 className="font-head">Settings</h2>
        <SettingsForm />
      </div>
    </>
  );
}
