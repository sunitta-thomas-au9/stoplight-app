import React from 'react';
import { StoplightProject } from '@stoplight/elements';
import '@stoplight/elements/styles/elements.scss';

const StoplightProjectDocs = () => {
  return (
    <div>
      <StoplightProject workspaceSlug="$STOPLIGHT-WORKSPACE-SLUG" projectSlug="#PROJECT-SLUG"></StoplightProject>
    </div>
  );
};
export default StoplightProjectDocs; 