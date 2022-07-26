import React from "react";

const SafeHydrate: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <div suppressHydrationWarning>
      {typeof document === "undefined" ? null : children}
    </div>
  );
};

export default SafeHydrate;
