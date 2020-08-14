import { Theme } from 'helios-ui'

export const theme: Theme = {
  colors: {
    primary: '#FF4086',
    secondary: '#368DF7',
    mutualBlue: '#272976',
    black: '#2B2B2B',
    grey: '#6D6D6D',
    grey2: '#9B9B9B',
    grey3: '#CACBCC',
    veryLightGrey: '#FBFBFB',
    green: '#1DB954',
    red: '#F03636',
    orange: '#EE732E',
    white: '#FFF',
    yellow: '#fdbd39'
  },
  sizes: {
    small: '12px',
    medium: '20px',
    large: '28px',
    xlarge: '36px',
    xxlarge: '44px',
    xxxlarge: '52px'
  },
  breakpoints: {
    small: '768px',
    medium: '992px',
    large: '1200px'
  },
  font: {
    family: 'Lato, sans-serif'
  },
  heading: {
    tags: {
      h1: {
        size: '32px',
        weight: '800px'
      },
      h2: {
        size: '28px',
        weight: 'bold'
      },
      h3: {
        size: '24px',
        weight: '800px'
      },
      h4: {
        size: '20px',
        weight: '800px'
      },
      h5: {
        size: '20px',
        weight: 'bold'
      },
      h6: {
        size: '16px',
        weight: 'bold'
      }
    }
  },
  image: {
    border: {
      borderBottomWidth: '0px',
      borderColor: '#000',
      borderLeftWidth: '0px',
      borderRadius: '0px',
      borderRightWidth: '0px',
      borderStyle: 'solid',
      borderTopWidth: '0px'
    },
    margin: {
      bottom: '0px',
      left: '0px',
      right: '0px',
      top: '0px'
    },
    opacity: 1
  },
  text: {
    large: {
      size: '16px',
      weight: 'normal'
    },
    medium: {
      size: '14px',
      weight: 'normal'
    },
    small: {
      size: '12px',
      weight: 'normal'
    }
  },
  backgroundColor: '#fff',
  button: {
    border: {
      color: 'transparent',
      radius: '6px',
      style: 'solid',
      width: '1px'
    },
    sizes: {
      small: '10px',
      medium: '12px',
      large: '14px',
      xlarge: '16px'
    },
    disabled: {
      backgroundColor: '#cacbcc',
      color: '#9b9b9b',
      borderColor: '#cacbcc',
      outlineColor: '#cacbcc',
      ghostColor: '#cacbcc'
    },
    hoverDarkenAmount: '0.1',
    fillTextColor: '#fff',
    disableOpacity: '0.3',
    iconMargin: '12px',
    weight: 'bold'
  },
  table: {
    border: {
      radius: '6px',
      color: '#efefef',
      style: 'solid',
      width: '0px'
    },
    shadow: '0px 0px 0px 0px',
    backgroundColor: '#ffffff',
    width: '100%',
    margin: {
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px'
    }
  },
  tableRow: {
    height: '100%'
  },
  tableItem: {
    border: {
      color: 'transparent',
      radius: '0px',
      style: '',
      width: '0px'
    },
    padding: '16px',
    textAlign: 'start',
    color: 'inherit'
  },
  tableBody: {
    stripColor: '#fdfdfd'
  },
  tableHeading: {
    border: {
      color: 'transparent',
      radius: '0px',
      style: '',
      width: '0px'
    },
    padding: '16px',
    textAlign: 'start',
    weight: '600',
    color: '#9b9b9b'
  },
  tableHead: {
    border: {
      bottom: '1px solid #efefef',
      left: '',
      right: '',
      top: ''
    },
    borderRadius: '0px',
    backgroundColor: 'inherit'
  },
  divider: {
    border: {
      color: '#f2f2f2',
      radius: '0px',
      style: 'solid',
      width: '1px'
    },
    vertical: {
      height: '35px',
      border: {
        color: '#f2f2f2',
        radius: '0px',
        style: 'solid',
        width: '1px'
      }
    }
  },
  input: {
    border: {
      borderColor: '#cacbcc',
      borderStyle: 'solid',
      borderRadius: '0px',
      borderBottomWidth: '1px',
      borderLeftWidth: '0px',
      borderRightWidth: '0px',
      borderTopWidth: '0px'
    },
    container: {
      backgroundColor: '#fbfbfb',
      direction: 'column'
    },
    focus: {
      borderColor: '#368df7',
      labelColor: '#368df7',
      animationTime: '250ms',
      backgroundColor: 'inherit',
      shouldAnimateBorder: true
    },
    label: {
      margin: {
        top: '11px',
        left: '11px',
        bottom: '0px',
        right: '0px'
      },
      padding: {
        top: '0px',
        left: '0px',
        bottom: '0px',
        right: '0px'
      },
      text: {
        color: '#000',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'normal'
      }
    },
    margin: {
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px'
    },
    padding: {
      top: '11px',
      left: '11px',
      bottom: '11px',
      right: '11px'
    },
    outline: '',
    backgroundColor: '#fbfbfb',
    placeholder: {
      color: 'inherit',
      opacity: '0.3'
    },
    error: {
      color: '#f03636',
      margin: {
        top: '10px',
        left: '0px',
        bottom: '10px',
        right: '0px'
      }
    }
  },
  modal: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    center: true,
    overlay: {
      animationTime: '200ms',
      backgroundColor: '#000',
      animationOpacity: '.5',
      disableAnimation: false
    },
    closeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#4a4a4a',
      cursor: 'pointer',
      defaultOpacity: '0.3',
      hoverOpacity: '0.8',
      fontSize: '24px',
      fontWeight: '700',
      hoverTransictionTime: '200ms',
      iconAlign: 'right',
      lineHeight: '1',
      outline: 'none',
      padding: '8px'
    }
  },
  badge: {
    margin: {
      bottom: '0px',
      left: '0px',
      right: '0px',
      top: '0px'
    },
    padding: {
      bottom: '5px',
      left: '10px',
      right: '10px',
      top: '5px'
    },
    text: {
      fontSize: '12px',
      fontWeight: 'normal'
    },
    border: {
      borderBottomWidth: '0px',
      borderLeftWidth: '0px',
      borderRightWidth: '0px',
      borderTopWidth: '0px',
      borderColor: 'transparent',
      borderRadius: '3px',
      borderStyle: 'solid'
    }
  },
  menu: {
    hoverDarkenAmount: '0.1',
    transitionTime: '175ms',
    iconSpacing: '12px',
    itemPadding: {
      bottom: '16px',
      left: '16px',
      right: '16px',
      top: '16px'
    },
    text: {
      fontSize: 'inherit',
      color: '#fff',
      fontFamily: 'inherit',
      fontWeight: 'normal',
      textAlign: 'right'
    },
    disabled: {
      color: '#CACBCC'
    },
    clean: {
      backgroundColor: '#fff',
      hoverDarkenAmount: '0.05'
    },
    base: {
      borderColor: 'transparent',
      textColor: '#fff'
    },
    toggle: {
      border: {
        borderBottomWidth: '1px',
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        borderTopWidth: '1px',
        borderColor: 'transparent',
        borderRadius: '6px',
        borderStyle: 'solid'
      }
    },
    toggleLabelContainer: {
      alignContent: 'center',
      display: 'inline-block',
      justifyContent: 'center',
      padding: {
        bottom: '10px',
        left: '10px',
        right: '10px',
        top: '10px'
      }
    }
  },
  checkbox: {
    container: {
      padding: {
        bottom: '10px',
        left: '0px',
        right: '10px',
        top: '10px'
      }
    },
    checkboxbox: {
      height: '24px',
      width: '24px',
      backgroundColor: '#eee',
      border: {
        borderBottomWidth: '2px',
        borderLeftWidth: '2px',
        borderRightWidth: '2px',
        borderTopWidth: '2px',
        borderColor: '#eee',
        borderRadius: '6px',
        borderStyle: 'solid'
      },
      margin: {
        bottom: '0px',
        left: '0px',
        right: '0px',
        top: '0px'
      },
      hover: {
        borderColor: '#eee',
        backgroundColor: '#eee'
      },
      checked: {
        borderColor: '#368df7',
        backgroundColor: '#368df7'
      },
      unchecked: {
        borderColor: '#eee',
        backgroundColor: '#eee'
      }
    },
    label: {
      disabled: {
        color: '#9b9b9b'
      },
      color: '#000',
      size: '16px'
    },
    checkmark: {
      color: '#FFF',
      disabled: {
        color: '#eee'
      }
    }
  },
  toast: {
    closeAnimationTime: 700,
    openAnimationTime: 700,
    shouldAnimateOnClose: true,
    shouldAnimateOnOpen: true,
    maxWidth: '380px',
    minWidth: '380px',
    titleMargin: {
      bottom: '6px',
      left: '0px',
      right: '0px',
      top: '0px'
    },
    border: {
      color: 'transparent',
      radius: '6px',
      style: 'none',
      width: '0px'
    },
    textSize: '14px',
    titleSize: '16px',
    shadow: '-2px 2px 10px 0 rgba(0, 0, 0, 0.2)',
    status: {
      success: {
        backgroundColor: '#368df7',
        textColor: '#ffffff',
        titleColor: '#ffffff'
      },
      error: {
        backgroundColor: '#f03636',
        textColor: '#ffffff',
        titleColor: '#ffffff'
      },
      warning: {
        backgroundColor: '#e2e2e2',
        textColor: '#6d6d6d',
        titleColor: '#6d6d6d'
      },
      info: {
        backgroundColor: '#fbfbfb',
        textColor: '#6d6d6d',
        titleColor: '#ff4086'
      }
    },
    container: {
      minWidth: '250px',
      color: '#FFF',
      padding: {
        top: '12px',
        bottom: '12px',
        left: '12px',
        right: '36px'
      },
      right: '16px',
      textAlign: 'center',
      transitionTime: '0.5s'
    }
  },
  progressBar: {
    container: {
      backgroundColor: '#fafafa',
      borderRadius: '6px',
      height: '6px'
    },
    filler: {
      borderRadius: '6px',
      transitionTime: '0.3s'
    }
  },
  sliderInput: {
    backgroundColor: '#fafafa',
    borderRadius: '5px',
    height: '6px',
    thumb: {
      backgroundColor: '#368df7',
      borderRadius: '50%',
      height: '16px',
      width: '16px'
    },
    fill: {
      backgroundColor: '#368df7',
      opacity: '0.7',
      height: '6px'
    }
  },
  calendar: {
    day: {
      backgroundColor: '#FFF',
      color: '#6d6d6d',
      borderRadius: '3px',
      width: '14.3%',
      selected: {
        backgroundColor: '#ff4086',
        color: '#FFF'
      }
    }
  },
  doubleSlider: {
    height: '15px',
    thumb: {
      height: '6px',
      width: '6px',
      borderRadius: '8px',
      transition: 'all .2s',
      backgroundColor: '#fff',
      border: '5px solid #368df7'
    },
    range: {
      backgroundColor: '#368df7',
      height: '4px',
      marginLeft: '6px',
      marginRight: '6px',
      transition: 'all .2s'
    },
    rangeContainer: {
      backgroundColor: '#e9e9e9',
      height: '4px',
      left: '5px',
      right: '5px',
      borderRadius: '2px'
    }
  },
  sidebar: {
    backgroundColor: '#fbfbfb',
    width: '350px',
    transition: 'all .3s',
    boxShadow: 'inset -5px 0 5px -5px rgba(50, 50, 50, 0.09)'
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #efefef',
    borderRadius: '5px',
    boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.03)',
    container: {
      padding: '16px'
    },
    footer: {
      backgroundColor: '#fbfbfb',
      padding: '16px',
      fontSize: '14px'
    }
  }
}
