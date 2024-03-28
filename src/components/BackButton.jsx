import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types"

function BackButton({ onClick }) {
  return (
    <Button className="min-w-0 px-unit-2" variant="light" onClick={onClick}>
      <Icon
        icon="material-symbols:arrow-left-alt-rounded"
        height="24"
        width="24"
      />
    </Button>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func
}

export default BackButton;
