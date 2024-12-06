import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="header__logo">
      <Link to="/">
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 150 50"
          style={{ height: "40", enableBackground: "new 0 0 150 50" }}
        >
          <g className="logo_svg">
            <path
              d="M6.45,4.2C6.31,4.01,6.06,3.86,5.7,3.74v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v12.4c-0.06,2.25-1.59,3.38-4.6,3.38
            c-0.65,0-1.29-0.12-1.92-0.36c-0.63-0.24-1.12-0.53-1.49-0.88c-0.07-0.07-0.11-0.17-0.11-0.3v-2.13h0.28
            c0.78,1.63,1.86,2.45,3.23,2.45c0.61,0,1.07-0.18,1.38-0.53c0.31-0.35,0.47-0.95,0.47-1.79V5.09C6.66,4.68,6.59,4.39,6.45,4.2z"
            />
            <path
              d="M12.34,9.38c-0.14-0.19-0.39-0.33-0.74-0.43v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v8.91c0,0.29-0.05,0.57-0.15,0.83
            s-0.26,0.47-0.48,0.62h-2.12v-9C12.56,9.87,12.48,9.57,12.34,9.38z M12.52,3.64c0.33-0.3,0.73-0.46,1.23-0.46
            c0.51,0,0.91,0.15,1.23,0.46c0.31,0.3,0.47,0.69,0.47,1.15c0,0.45-0.16,0.83-0.48,1.14c-0.32,0.31-0.72,0.47-1.21,0.47
            c-0.48,0-0.88-0.16-1.21-0.48c-0.33-0.32-0.5-0.69-0.5-1.13C12.04,4.32,12.2,3.94,12.52,3.64z"
            />
            <path
              d="M21.04,17.31c0.56,0.64,1.34,0.97,2.34,0.97c0.62,0,1.26-0.16,1.91-0.49c0.65-0.33,1.16-0.73,1.54-1.23l0.65,0.52
            c-0.35,0.68-0.92,1.25-1.71,1.71c-0.79,0.46-1.74,0.69-2.84,0.69c-1,0-1.92-0.22-2.78-0.65s-1.53-1.07-2.04-1.92
            s-0.76-1.85-0.76-3.03s0.24-2.17,0.72-3s1.12-1.45,1.92-1.87s1.69-0.62,2.66-0.62c0.95,0,1.81,0.21,2.57,0.62s1.36,1.03,1.8,1.85
            c0.44,0.82,0.66,1.83,0.66,3.01c0,0.13-0.02,0.33-0.07,0.59h-7.52C20.15,15.72,20.47,16.66,21.04,17.31z M25.03,13.26
            c0-1.13-0.21-2.02-0.64-2.67s-1.01-0.98-1.75-0.98c-0.81,0-1.42,0.31-1.84,0.94s-0.66,1.53-0.72,2.7H25.03z"
            />
            <path
              d="M29.75,9.27c-0.14-0.19-0.4-0.33-0.76-0.43V8.62h3.47c0.17,0,0.26,0.06,0.26,0.17v6.59c0,1.45,0.4,2.32,1.21,2.62
            c0.22,0.09,0.46,0.13,0.72,0.13c0.62,0,1.22-0.25,1.79-0.74c0.57-0.49,1.02-1.27,1.35-2.34l-0.04-1.76v-3.14
            c0-0.41-0.07-0.7-0.22-0.89c-0.14-0.19-0.4-0.33-0.76-0.43V8.62h3.47c0.17,0,0.26,0.06,0.26,0.17v8.57c0,0.46,0.04,0.79,0.11,0.99
            c0.07,0.2,0.22,0.27,0.46,0.23l0.02,0.2c-0.19,0.12-0.44,0.24-0.77,0.37s-0.66,0.24-1.01,0.33c-0.09,0.04-0.19,0.07-0.3,0.07
            c-0.1,0-0.18-0.03-0.24-0.09c-0.22-0.17-0.42-0.43-0.61-0.78c-0.19-0.35-0.29-0.67-0.3-0.98v-0.22c-0.45,0.75-1.01,1.28-1.68,1.57
            c-0.67,0.3-1.37,0.44-2.09,0.44c-1.32,0-2.33-0.36-3.05-1.08c-0.72-0.72-1.07-1.73-1.07-3.01v-5.23
            C29.97,9.76,29.9,9.46,29.75,9.27z"
            />
            <path
              d="M43.2,9.3c-0.14-0.19-0.4-0.34-0.76-0.46v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v1.45c0.45-0.68,0.99-1.15,1.64-1.42
            c0.64-0.27,1.3-0.4,1.98-0.4c1.33,0,2.36,0.36,3.08,1.08c0.72,0.72,1.08,1.73,1.08,3.01v5.27c0,0.29-0.05,0.57-0.15,0.85
            s-0.26,0.48-0.48,0.63h-2.12v-6.74c0-1.45-0.4-2.32-1.21-2.62c-0.22-0.09-0.47-0.13-0.76-0.13c-0.59,0-1.17,0.23-1.72,0.68
            c-0.56,0.46-1,1.18-1.33,2.18v5.16c0,0.29-0.05,0.57-0.15,0.85c-0.1,0.27-0.26,0.48-0.48,0.63h-2.1v-9.09
            C43.41,9.78,43.34,9.48,43.2,9.3z"
            />
            <path
              d="M64.69,13.09v4.97c0,0.46-0.13,0.87-0.39,1.21h-2.36V5.09c0-0.42-0.07-0.72-0.22-0.9s-0.4-0.33-0.76-0.44v-0.2h5.9
            c1.14,0,2.16,0.18,3.07,0.53c0.9,0.35,1.62,0.88,2.14,1.58s0.78,1.54,0.78,2.53c0,1.59-0.55,2.8-1.66,3.64
            c-1.11,0.84-2.55,1.26-4.33,1.26H64.69z M66.86,11.88c1,0,1.79-0.31,2.36-0.93c0.58-0.62,0.87-1.54,0.87-2.75
            c0-1.1-0.29-1.94-0.88-2.54s-1.37-0.89-2.35-0.89h-2.17v7.11H66.86z"
            />
            <path
              d="M77.03,18.85c-0.85-0.43-1.54-1.06-2.06-1.9c-0.52-0.84-0.78-1.84-0.78-3.01c0-1.17,0.26-2.17,0.78-3
            c0.52-0.83,1.21-1.46,2.06-1.89c0.85-0.43,1.76-0.64,2.73-0.64s1.88,0.21,2.72,0.64c0.85,0.43,1.53,1.06,2.05,1.89
            s0.78,1.83,0.78,3c0,1.17-0.26,2.18-0.78,3.01c-0.52,0.84-1.2,1.47-2.05,1.9s-1.75,0.64-2.72,0.64S77.88,19.27,77.03,18.85z
            M77.73,17.15c0.53,0.75,1.2,1.13,2.03,1.13c0.82,0,1.5-0.38,2.02-1.13c0.52-0.75,0.78-1.82,0.78-3.21c0-1.39-0.26-2.45-0.78-3.2
            c-0.52-0.74-1.19-1.12-2.02-1.12c-0.82,0-1.5,0.38-2.03,1.13c-0.53,0.75-0.79,1.81-0.79,3.19C76.94,15.32,77.2,16.39,77.73,17.15z"
            />
            <path
              d="M87.38,9.3c-0.14-0.19-0.39-0.34-0.75-0.46v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v2.15c0.36-0.94,0.81-1.6,1.33-1.97
            c0.53-0.38,1.11-0.56,1.75-0.56c0.39,0,0.73,0.04,1.02,0.13c0.23,0.04,0.38,0.1,0.46,0.16C94.97,8.76,95,8.84,95,8.93v2.17h-0.41
            c-0.49-0.54-1.04-0.8-1.65-0.8c-1.13,0-2,1.05-2.6,3.14v4.36c0,0.29-0.05,0.57-0.15,0.85s-0.26,0.48-0.48,0.63h-2.12v-9.09
            C87.59,9.78,87.52,9.48,87.38,9.3z"
            />
            <path
              d="M97.45,9.92h-1.84V8.71h1.84V6.98c0-0.46-0.03-0.78-0.1-0.94c-0.06-0.17-0.24-0.29-0.53-0.38V5.44l3.12-0.78h0.04
            c0.06,0,0.11,0.01,0.15,0.04c0.04,0.03,0.07,0.07,0.07,0.11v3.9h3.36v1.21h-3.36v6.03c0,0.79,0.12,1.38,0.35,1.76
            c0.23,0.38,0.58,0.56,1.06,0.56c0.4,0,0.75-0.12,1.04-0.37c0.29-0.25,0.56-0.64,0.82-1.19h0.28v2.04c0,0.26-0.08,0.42-0.24,0.48
            c-0.2,0.07-0.49,0.13-0.86,0.18c-0.37,0.05-0.73,0.08-1.07,0.08c-1.4,0-2.44-0.3-3.12-0.91c-0.68-0.61-1.02-1.48-1.02-2.62V9.92z"
            />
            <path
              d="M107.78,4.04c0.67-0.61,1.64-0.92,2.93-0.92c0.35,0,0.71,0.03,1.07,0.08c0.37,0.05,0.65,0.11,0.86,0.18
            c0.16,0.06,0.24,0.22,0.24,0.48v1.47h-0.28c-0.38-0.67-0.9-1-1.56-1c-1,0-1.5,0.77-1.5,2.32v2.1h3.14v1.21h-3.14v7.85
            c0,0.29-0.05,0.57-0.15,0.83c-0.1,0.27-0.26,0.47-0.48,0.62h-2.12v-9.3h-1.84V8.75h1.84v-2.1C106.78,5.52,107.11,4.65,107.78,4.04z
            "
            />
            <path
              d="M116.64,18.85c-0.85-0.43-1.54-1.06-2.06-1.9c-0.52-0.84-0.78-1.84-0.78-3.01c0-1.17,0.26-2.17,0.78-3
            c0.52-0.83,1.21-1.46,2.06-1.89c0.85-0.43,1.76-0.64,2.73-0.64c0.97,0,1.88,0.21,2.72,0.64c0.85,0.43,1.53,1.06,2.05,1.89
            s0.78,1.83,0.78,3c0,1.17-0.26,2.18-0.78,3.01c-0.52,0.84-1.2,1.47-2.05,1.9s-1.75,0.64-2.72,0.64
            C118.41,19.49,117.5,19.27,116.64,18.85z M117.35,17.15c0.53,0.75,1.2,1.13,2.03,1.13s1.5-0.38,2.02-1.13s0.78-1.82,0.78-3.21
            c0-1.39-0.26-2.45-0.78-3.2c-0.52-0.74-1.19-1.12-2.02-1.12s-1.5,0.38-2.03,1.13c-0.53,0.75-0.79,1.81-0.79,3.19
            C116.56,15.32,116.82,16.39,117.35,17.15z"
            />
            <path
              d="M127.14,4.18c-0.14-0.19-0.4-0.33-0.76-0.43v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v13.29c0,0.49,0.02,0.85,0.07,1.07
            c0.04,0.22,0.13,0.38,0.26,0.46c0.13,0.08,0.34,0.12,0.63,0.12v0.76c-0.38,0.07-0.79,0.11-1.24,0.11c-0.85,0-1.47-0.21-1.87-0.63
            c-0.39-0.42-0.59-1.05-0.59-1.89V5.07C127.36,4.66,127.28,4.37,127.14,4.18z"
            />
            <path
              d="M132.65,9.38c-0.14-0.19-0.39-0.33-0.74-0.43v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v8.91c0,0.29-0.05,0.57-0.15,0.83
            c-0.1,0.27-0.26,0.47-0.48,0.62h-2.12v-9C132.87,9.87,132.79,9.57,132.65,9.38z M132.83,3.64c0.33-0.3,0.73-0.46,1.23-0.46
            c0.51,0,0.91,0.15,1.23,0.46c0.31,0.3,0.47,0.69,0.47,1.15c0,0.45-0.16,0.83-0.48,1.14c-0.32,0.31-0.72,0.47-1.21,0.47
            c-0.48,0-0.88-0.16-1.21-0.48c-0.33-0.32-0.5-0.69-0.5-1.13C132.34,4.32,132.51,3.94,132.83,3.64z"
            />
            <path
              d="M140.48,18.85c-0.85-0.43-1.54-1.06-2.06-1.9c-0.52-0.84-0.78-1.84-0.78-3.01c0-1.17,0.26-2.17,0.78-3
            c0.52-0.83,1.21-1.46,2.06-1.89c0.85-0.43,1.76-0.64,2.73-0.64c0.97,0,1.88,0.21,2.72,0.64c0.85,0.43,1.53,1.06,2.05,1.89
            s0.78,1.83,0.78,3c0,1.17-0.26,2.18-0.78,3.01c-0.52,0.84-1.2,1.47-2.05,1.9s-1.75,0.64-2.72,0.64
            C142.24,19.49,141.33,19.27,140.48,18.85z M141.18,17.15c0.53,0.75,1.2,1.13,2.03,1.13s1.5-0.38,2.02-1.13s0.78-1.82,0.78-3.21
            c0-1.39-0.26-2.45-0.78-3.2c-0.52-0.74-1.19-1.12-2.02-1.12s-1.5,0.38-2.03,1.13c-0.53,0.75-0.79,1.81-0.79,3.19
            C140.39,15.32,140.65,16.39,141.18,17.15z"
            />
          </g>
          <g className="logo_svg">
            <path
              d="M24,31.15c-0.14-0.19-0.39-0.34-0.75-0.46v-0.2h10.17c0.13,0,0.22,0.02,0.26,0.05c0.04,0.04,0.06,0.1,0.06,0.18v2.1h-0.28
            c-0.27-0.39-0.64-0.68-1.08-0.86c-0.45-0.18-1.11-0.27-2-0.27h-3.43v6.07c2.47-0.04,4.37-0.14,5.68-0.3v1.8
            c-1.32-0.16-3.21-0.26-5.68-0.3v6.03c0,0.46-0.12,0.87-0.37,1.21h-2.39V32.04C24.21,31.64,24.14,31.34,24,31.15z"
            />
            <path
              d="M35.63,36.25c-0.14-0.19-0.39-0.34-0.75-0.46v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v2.15c0.36-0.94,0.81-1.6,1.33-1.97
            c0.53-0.38,1.11-0.56,1.75-0.56c0.39,0,0.73,0.04,1.02,0.13c0.23,0.04,0.38,0.1,0.46,0.16c0.07,0.06,0.11,0.14,0.11,0.23v2.17
            h-0.41c-0.49-0.54-1.04-0.8-1.65-0.8c-1.13,0-2,1.05-2.6,3.14v4.36c0,0.29-0.05,0.57-0.15,0.85c-0.1,0.27-0.26,0.48-0.48,0.63
            h-2.12v-9.09C35.83,36.73,35.77,36.44,35.63,36.25z"
            />
            <path
              d="M47.13,45.8c-0.85-0.43-1.54-1.06-2.06-1.9c-0.52-0.84-0.78-1.84-0.78-3.01c0-1.17,0.26-2.17,0.78-3
            c0.52-0.83,1.21-1.46,2.06-1.89c0.85-0.43,1.76-0.64,2.73-0.64c0.97,0,1.88,0.21,2.72,0.64c0.85,0.43,1.53,1.06,2.05,1.89
            s0.78,1.83,0.78,3c0,1.17-0.26,2.18-0.78,3.01c-0.52,0.84-1.2,1.47-2.05,1.9s-1.75,0.64-2.72,0.64
            C48.9,46.44,47.98,46.23,47.13,45.8z M47.84,44.1c0.53,0.75,1.2,1.13,2.03,1.13c0.82,0,1.5-0.38,2.02-1.13
            c0.52-0.75,0.78-1.82,0.78-3.21c0-1.39-0.26-2.45-0.78-3.2c-0.52-0.74-1.19-1.12-2.02-1.12c-0.82,0-1.5,0.38-2.03,1.13
            c-0.53,0.75-0.79,1.81-0.79,3.19C47.05,42.28,47.31,43.35,47.84,44.1z"
            />
            <path
              d="M57.5,36.25c-0.14-0.19-0.4-0.34-0.76-0.46v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v1.45c0.45-0.68,0.99-1.15,1.64-1.42
            c0.64-0.27,1.3-0.4,1.98-0.4c1.33,0,2.36,0.36,3.08,1.08c0.72,0.72,1.08,1.73,1.08,3.01v5.27c0,0.29-0.05,0.57-0.15,0.85
            s-0.26,0.48-0.48,0.63h-2.12v-6.74c0-1.45-0.4-2.32-1.21-2.62c-0.22-0.09-0.47-0.13-0.76-0.13c-0.59,0-1.17,0.23-1.72,0.68
            c-0.56,0.46-1,1.18-1.33,2.18v5.16c0,0.29-0.05,0.57-0.15,0.85c-0.1,0.27-0.26,0.48-0.48,0.63h-2.1v-9.09
            C57.71,36.73,57.64,36.44,57.5,36.25z"
            />
            <path
              d="M71.66,36.88h-1.84v-1.21h1.84v-1.73c0-0.46-0.03-0.78-0.1-0.94c-0.06-0.17-0.24-0.29-0.53-0.38v-0.22l3.12-0.78h0.04
            c0.06,0,0.11,0.01,0.15,0.04s0.07,0.07,0.07,0.11v3.9h3.36v1.21h-3.36v6.03c0,0.79,0.12,1.38,0.35,1.76
            c0.23,0.38,0.59,0.56,1.06,0.56c0.41,0,0.75-0.12,1.04-0.37c0.29-0.25,0.56-0.64,0.82-1.19h0.28v2.04c0,0.26-0.08,0.42-0.24,0.48
            c-0.2,0.07-0.49,0.13-0.86,0.18c-0.37,0.05-0.73,0.08-1.07,0.08c-1.4,0-2.44-0.3-3.12-0.91c-0.68-0.61-1.02-1.48-1.02-2.62V36.88z"
            />
            <path d="M88.53,38.94h-9.02v-1.47h9.02V38.94z" />
            <path
              d="M94.02,44.26c0.56,0.64,1.34,0.97,2.34,0.97c0.62,0,1.26-0.16,1.91-0.49s1.16-0.73,1.54-1.23l0.65,0.52
            c-0.35,0.68-0.92,1.25-1.71,1.71c-0.79,0.46-1.74,0.69-2.84,0.69c-1,0-1.92-0.22-2.78-0.65c-0.85-0.43-1.53-1.07-2.04-1.92
            s-0.76-1.85-0.76-3.03s0.24-2.17,0.72-3c0.48-0.83,1.12-1.45,1.92-1.87c0.8-0.41,1.69-0.62,2.66-0.62c0.95,0,1.81,0.21,2.57,0.62
            s1.36,1.03,1.8,1.85c0.44,0.82,0.66,1.83,0.66,3.01c0,0.13-0.02,0.33-0.07,0.59h-7.52C93.13,42.67,93.45,43.62,94.02,44.26z
            M98.01,40.22c0-1.13-0.21-2.02-0.64-2.67c-0.43-0.65-1.01-0.98-1.75-0.98c-0.81,0-1.42,0.31-1.84,0.94
            c-0.42,0.63-0.66,1.53-0.71,2.7H98.01z"
            />
            <path
              d="M102.73,36.25c-0.14-0.19-0.4-0.34-0.76-0.46v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v1.45c0.45-0.68,0.99-1.15,1.64-1.42
            c0.64-0.27,1.3-0.4,1.98-0.4c1.33,0,2.36,0.36,3.08,1.08c0.72,0.72,1.08,1.73,1.08,3.01v5.27c0,0.29-0.05,0.57-0.15,0.85
            c-0.1,0.27-0.26,0.48-0.48,0.63h-2.12v-6.74c0-1.45-0.41-2.32-1.21-2.62c-0.22-0.09-0.47-0.13-0.76-0.13
            c-0.59,0-1.17,0.23-1.72,0.68c-0.56,0.46-1,1.18-1.33,2.18v5.16c0,0.29-0.05,0.57-0.15,0.85c-0.1,0.27-0.26,0.48-0.48,0.63h-2.1
            v-9.09C102.95,36.73,102.88,36.44,102.73,36.25z"
            />
            <path
              d="M117.85,45.81c-0.71-0.42-1.28-1.04-1.71-1.87c-0.43-0.82-0.65-1.82-0.65-2.99s0.22-2.17,0.65-2.99s1-1.45,1.71-1.87
            c0.71-0.42,1.47-0.63,2.28-0.63c0.62,0,1.21,0.13,1.77,0.38c0.56,0.25,1.04,0.62,1.44,1.12v-4.94c0-0.4-0.07-0.7-0.22-0.89
            c-0.14-0.19-0.4-0.33-0.76-0.43v-0.2h3.47c0.16,0,0.24,0.05,0.24,0.15v14.09c0,0.29-0.05,0.57-0.15,0.85
            c-0.1,0.27-0.26,0.48-0.48,0.63h-2.1v-1.28c-0.4,0.49-0.89,0.86-1.44,1.12c-0.56,0.25-1.15,0.38-1.77,0.38
            C119.31,46.44,118.56,46.23,117.85,45.81z M118.9,44.12c0.46,0.71,1.09,1.06,1.9,1.06c0.59,0,1.11-0.24,1.56-0.73
            s0.77-1.13,0.98-1.94v-3.12c-0.2-0.81-0.53-1.46-0.98-1.94s-0.97-0.73-1.56-0.73c-0.81,0-1.44,0.35-1.9,1.06
            c-0.46,0.71-0.68,1.76-0.68,3.17S118.44,43.41,118.9,44.12z"
            />
          </g>
          <line
            className="logo_line"
            x1="1.5"
            y1="25.27"
            x2="148.64"
            y2="25.27"
          />
        </svg>
      </Link>
    </h1>
  );
};

export default Logo;