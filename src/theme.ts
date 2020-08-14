import { ThemedStyledProps, ThemeProps } from 'styled-components'

export type SimpleThemedProps = ThemeProps<Theme>
export type ThemedProps<TProps> = ThemedStyledProps<TProps, Theme>

export type ButtonSizeKeys = keyof Theme['button']['sizes']
export type Sizes = keyof Theme['sizes']

export type Padding = {
  left: string
  right: string
  bottom: string
  top: string
}

export type Margin = {
  left: string
  right: string
  bottom: string
  top: string
}

export type Border = {
  radius: string
  color: string
  style: string
  width: string
}

export type Text = {
  fontSize: string
  fontFamily: string
  fontWeight: string
  color: string
}

export type SimpleText = {
  fontSize: string
  fontWeight: string
}

export type NewBorder = {
  borderStyle: string
  borderColor: string
  borderRadius: string
  borderBottomWidth: string
  borderTopWidth: string
  borderLeftWidth: string
  borderRightWidth: string
}

export type ToastStatusStyle = {
  backgroundColor: string
  textColor: string
  titleColor: string
}

export type Theme = {
  colors: {
    primary: string
    secondary: string
    [K: string]: string
  }
  sizes: {
    small: string
    medium: string
    large: string
    xlarge: string
    xxlarge: string
    xxxlarge: string
  }
  breakpoints: {
    small: string
    medium: string
    large: string
  }
  font: {
    family: string
  }
  heading: {
    tags: {
      h1: {
        size: string
        weight: string
      }
      h2: {
        size: string
        weight: string
      }
      h3: {
        size: string
        weight: string
      }
      h4: {
        size: string
        weight: string
      }
      h5: {
        size: string
        weight: string
      }
      h6: {
        size: string
        weight: string
      }
    }
  }
  image: {
    border: NewBorder
    margin: Margin
    opacity: number
  }
  text: {
    large: {
      size: string
      weight: string
    }
    medium: {
      size: string
      weight: string
    }
    small: {
      size: string
      weight: string
    }
  }
  backgroundColor: string
  button: {
    border: Border
    fillTextColor: string
    hoverDarkenAmount: string
    disableOpacity: string
    iconMargin: string
    weight: string
    disabled: {
      backgroundColor: string
      borderColor: string
      color: string
      outlineColor: string
      ghostColor: string
    }
    sizes: {
      small: string
      medium: string
      large: string
      xlarge: string
    }
  }
  table: {
    border: Border
    shadow: string
    backgroundColor: string
    width: string
    margin: string | Margin
  }
  tableRow: {
    height: string
  }
  tableItem: {
    border: Border
    padding: string | Padding
    textAlign: string
    color: string
  }
  tableBody: {
    stripColor: string
  }
  tableHeading: {
    border: Border
    padding: string | Padding
    textAlign: string
    weight: string
    color: string
  }
  tableHead: {
    border:
      | {
          bottom: string
          left: string
          top: string
          right: string
        }
      | string
    backgroundColor: string
    borderRadius: string
  }
  divider: {
    border: Border
    vertical: {
      height: string
      border: {
        color: string
        radius: string
        style: string
        width: string
      }
    }
  }
  input: {
    container: {
      backgroundColor: string
      direction: string
    }
    label: {
      margin: Margin
      padding: Padding
      text: Text
    }
    padding: Padding
    margin: Margin
    border: NewBorder
    focus: {
      borderColor: string
      labelColor: string
      animationTime: string
      backgroundColor: string
      shouldAnimateBorder: boolean
    }
    placeholder: {
      color: string
      opacity: string
    }
    error: {
      color: string
      margin: Margin
    }
    outline: string
    backgroundColor: string
  }
  modal: {
    center: boolean
    backgroundColor: string
    borderRadius: string
    overlay: {
      backgroundColor: string
      animationTime: string
      animationOpacity: string
      disableAnimation: boolean
    }
    closeButton: {
      padding: string
      backgroundColor: string
      fontSize: string
      fontWeight: string
      lineHeight: string
      cursor: string
      color: string
      defaultOpacity: string
      hoverOpacity: string
      hoverTransictionTime: string
      border: string
      outline: string
      iconAlign: 'right' | 'left'
    }
  }
  badge: {
    padding: Padding
    margin: Margin
    text: SimpleText
    border: NewBorder
  }
  menu: {
    transitionTime: string
    hoverDarkenAmount: string
    itemPadding: Padding
    iconSpacing: string
    toggleLabelContainer: {
      padding: Padding
      display: string
      alignContent: string
      justifyContent: string
    }
    toggle: {
      border: NewBorder
    }
    disabled: {
      color: string
    }
    clean: {
      backgroundColor: string
      hoverDarkenAmount: string
    }
    base: {
      textColor: string
      borderColor: string
    }
    text: Text & { textAlign: string }
  }
  checkbox: {
    container: {
      padding: Padding
    }
    checkboxbox: {
      height: string
      width: string
      backgroundColor: string
      border: NewBorder
      margin: Margin
      hover: {
        borderColor: string
        backgroundColor: string
      }
      checked: {
        borderColor: string
        backgroundColor: string
      }
      unchecked: {
        borderColor: string
        backgroundColor: string
      }
    }
    label: {
      disabled: {
        color: string
      }
      color: string
      size: string
    }
    checkmark: {
      color: string
      disabled: {
        color: string
      }
    }
  }
  toast: {
    closeAnimationTime: number
    openAnimationTime: number
    shouldAnimateOnClose: boolean
    shouldAnimateOnOpen: boolean
    shadow: string
    maxWidth: string
    minWidth: string
    titleMargin: Margin
    titleSize: string
    textSize: string
    border: Border
    status: {
      success: ToastStatusStyle
      info: ToastStatusStyle
      warning: ToastStatusStyle
      error: ToastStatusStyle
    }
    container: {
      minWidth: string
      color: string
      padding: Padding
      right: string
      textAlign: string
      transitionTime: string
    }
  }
  progressBar: {
    container: {
      backgroundColor: string
      borderRadius: string
      height: string
    }
    filler: {
      borderRadius: string
      transitionTime: string
    }
  }
  sliderInput: {
    thumb: {
      borderRadius: string
      width: string
      height: string
      backgroundColor: string
    }
    height: string
    borderRadius: string
    backgroundColor: string
    fill: {
      opacity: string
      height: string
      backgroundColor: string
    }
  }
  calendar: {
    day: {
      backgroundColor: string
      color: string
      borderRadius: string
      width: string
      selected: {
        backgroundColor: string
        color: string
      }
    }
  }
  doubleSlider: {
    height: string
    thumb: {
      borderRadius: string
      width: string
      height: string
      transition: string
      border: string
      backgroundColor: string
    }
    range: {
      height: string
      backgroundColor: string
      marginLeft: string
      marginRight: string
      transition: string
    }
    rangeContainer: {
      height: string
      left: string
      right: string
      backgroundColor: string
      borderRadius: string
    }
  }
  sidebar: {
    width: string
    backgroundColor: string
    transition: string
    boxShadow: string
  }
  card: {
    backgroundColor: string
    border: string
    borderRadius: string
    boxShadow: string
    footer: {
      backgroundColor: string
      padding: string
      fontSize: string
    }
    container: {
      padding: string
    }
  }
}

export type ToastStatuses = keyof Theme['toast']['status']
