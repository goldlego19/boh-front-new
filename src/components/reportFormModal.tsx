/**
 * @jsxRuntime classic
 * @jsx jsx
 */
import { Fragment, useCallback, useState } from "react";
import { token } from "@atlaskit/tokens";
import ArrowRightIcon from "@atlaskit/icon/core/arrow-right";
import { Account, categoryType } from "../@Global/@types";

// eslint-disable-next-line @atlaskit/ui-styling-standard/use-compiled -- Ignored via go/DSP-18766
import { jsx } from "@emotion/react";

import Button from "@atlaskit/button/new";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import { Flex, Grid, xcss } from "@atlaskit/primitives";
import ReportForm from "./reportForm";

// Add some styling constants for bold and grid layout

const gridStyles = xcss({
  width: "100%",
});

const titleContainerStyles = xcss({
  gridArea: "title",
});

// Define types for the props

interface ReportFormModalProps {
  account: Account;
}

export default function ReportFormModal({ account }: ReportFormModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <Fragment>
      <Button
        onClick={openModal}
        shouldFitContainer
        iconAfter={(iconProps) => (
          <ArrowRightIcon
            {...iconProps}
            color={token("color.text", "#0c66e4")}
          />
        )}
        appearance="default"
        isDisabled={account.category === categoryType.error} // Disable if category is error
      >
        <span
          className={`font-sf-pro font-bold ${
            account.category === categoryType.error
              ? "text-gray-400"
              : "text-[#808080]"
          }`}
        >
          {account.category === categoryType.error
            ? "Error Occurred"
            : "Generate Report"}
        </span>
      </Button>

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <ModalHeader>
              <Grid
                gap="space.200"
                templateAreas={["title close"]}
                xcss={gridStyles}
                alignContent="center"
                justifyContent="center"
              >
                <Flex xcss={titleContainerStyles} justifyContent="start">
                  <ModalTitle>
                    <span className="font-sf-pro font-bold text-3xl">
                      Report Form
                    </span>
                  </ModalTitle>
                  <br />
                </Flex>
              </Grid>
            </ModalHeader>
            <ModalBody>
              <ReportForm closeModal={closeModal} />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </Fragment>
  );
}
