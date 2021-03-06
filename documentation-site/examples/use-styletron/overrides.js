// @flow
import React from 'react';
import {useStyletron} from 'baseui';
import {Button} from 'baseui/button';

export default () => {
  const [useCss, theme] = useStyletron();
  return (
    <Button
      disabled
      overrides={{
        BaseButton: props => {
          return (
            <button
              disabled={props.disabled}
              className={useCss({
                background: props.$disabled
                  ? theme.colors.negative400
                  : theme.colors.warning400,
                color: theme.colors.background,
              })}
            >
              {props.children}
            </button>
          );
        },
      }}
    >
      this is a BaseButton
    </Button>
  );
};
