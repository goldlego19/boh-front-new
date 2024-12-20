// AutoDismissFlagSuccessExample.tsx
import React from "react";
import { AutoDismissFlag, FlagGroup } from "@atlaskit/flag";
import SuccessIcon from "@atlaskit/icon/glyph/check-circle";
import { token } from "@atlaskit/tokens";
import { useFlag } from "../../@Global/contexts/FlagContext";

const Flag: React.FC = () => {
  const { flags, dismissFlag } = useFlag();

  return (
    <FlagGroup onDismissed={(id) => dismissFlag(id)}>
      {flags.map((flag) => (
        <AutoDismissFlag
          key={flag.id}
          id={flag.id}
          //   appearance="success"
          icon={
            <SuccessIcon
              label="Success"
              secondaryColor={token("color.background.success.bold")}
            />
          }
          title={flag.title}
          description={flag.description}
      
        />
      ))}
    </FlagGroup>
  );
};

export default Flag;
