import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
margin: 15px;
`;

export default function Event({color}) {
    return <Wrapper>

        {color === "black" ?
            <svg xmlns="http://www.w3.org/2000/svg" width="120pt" height="120pt" viewBox="0 0 120 120" version="1.1">
                <g id="surface1">
                    <path
                        d="M 42 42.960938 L 42 77.519531 L 40.140625 77.160156 C 37.738281 76.679688 34.078125 74.039062 32.398438 71.519531 C 30.71875 69.058594 29.398438 64.261719 29.398438 60.480469 L 29.398438 57.601562 L 6 57.601562 L 6 64.199219 L 12.539062 64.199219 L 12.71875 80.519531 C 12.898438 96.121094 12.960938 97.019531 14.28125 99.660156 C 16.441406 104.101562 19.5 107.160156 23.878906 109.320312 L 27.898438 111.300781 L 54.898438 111.300781 C 81.71875 111.300781 81.898438 111.300781 84.839844 109.921875 C 89.339844 107.878906 92.578125 104.878906 94.859375 100.679688 L 96.898438 96.898438 L 97.078125 80.820312 L 97.261719 64.800781 L 114 64.800781 L 114 61.199219 L 78 61.199219 L 78 63.121094 C 78 65.519531 75.78125 70.378906 73.558594 73.019531 C 72.71875 74.039062 70.558594 75.601562 68.878906 76.441406 C 65.878906 77.941406 65.339844 78 55.679688 78 L 45.601562 78 L 45.601562 44.820312 C 45.660156 8.519531 45.539062 9.121094 48.898438 19.378906 C 52.558594 30.78125 51.78125 42.359375 46.5 54.71875 C 46.078125 55.738281 47.339844 55.800781 67.378906 55.800781 L 88.738281 55.800781 L 90.539062 52.019531 C 96.058594 40.378906 96.121094 27.839844 90.78125 16.078125 L 88.621094 11.398438 L 45.601562 11.398438 L 45.601562 9.898438 C 45.601562 8.640625 45.300781 8.398438 43.800781 8.398438 L 42 8.398438 Z M 81.601562 22.738281 C 82.738281 23.339844 84.480469 24.839844 85.5 26.039062 C 87.121094 28.078125 87.300781 28.738281 87.300781 32.339844 C 87.300781 35.878906 87.058594 36.660156 85.558594 38.640625 C 84.539062 40.019531 82.558594 41.519531 80.640625 42.421875 C 78.839844 43.199219 77.398438 44.101562 77.398438 44.398438 C 77.398438 44.640625 76.558594 45.179688 75.601562 45.601562 C 73.199219 46.621094 69 46.019531 67.800781 44.519531 C 67.261719 43.921875 65.878906 43.078125 64.738281 42.660156 C 62.578125 41.941406 59.460938 39.121094 58.261719 36.78125 C 57.359375 34.980469 57.421875 29.640625 58.441406 27.71875 C 59.519531 25.621094 62.28125 23.039062 64.199219 22.261719 C 65.039062 21.960938 68.820312 21.660156 72.601562 21.660156 C 78.238281 21.601562 79.921875 21.78125 81.601562 22.738281 Z M 39.300781 88.5 C 43.199219 90.421875 44.039062 95.460938 40.921875 98.519531 C 37.738281 101.699219 32.761719 100.800781 30.839844 96.660156 C 29.398438 93.660156 30.601562 90.121094 33.601562 88.679688 C 36.179688 87.359375 36.78125 87.359375 39.300781 88.5 Z M 60.058594 89.761719 C 62.039062 91.679688 62.519531 93.898438 61.5 96.300781 C 60.421875 98.878906 58.558594 100.320312 56.160156 100.378906 C 53.28125 100.441406 51.238281 99.238281 50.039062 96.660156 C 49.140625 94.800781 49.140625 94.261719 49.859375 92.101562 C 51.421875 87.601562 56.578125 86.460938 60.058594 89.761719 Z M 79.320312 89.820312 C 83.101562 93.421875 80.398438 100.378906 75.238281 100.378906 C 72 100.378906 69.78125 98.820312 68.878906 95.941406 C 67.019531 89.578125 74.519531 85.199219 79.320312 89.820312 Z M 79.320312 89.820312 "/>
                    <path
                        d="M 63 30.421875 C 59.699219 34.621094 65.519531 39.480469 69.300781 35.699219 C 71.101562 33.898438 71.160156 32.460938 69.539062 30.359375 C 67.800781 28.199219 64.738281 28.199219 63 30.421875 Z M 63 30.421875 "/>
                    <path
                        d="M 75.601562 30 C 73.980469 31.621094 74.101562 33.960938 75.898438 35.699219 C 77.640625 37.5 79.980469 37.621094 81.601562 36 C 83.160156 34.441406 83.160156 31.140625 81.71875 29.820312 C 80.21875 28.441406 77.039062 28.558594 75.601562 30 Z M 75.601562 30 "/>
                </g>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="120pt" height="120pt" viewBox="0 0 120 120" version="1.1">
                <g>
                    <path fill={color}
                          d="M 60.84375 7.96875 L 60.703125 15.703125 L 56.296875 26.015625 C 53.671875 32.203125 52.125 36.375 52.453125 36.46875 C 52.828125 36.609375 52.96875 40.359375 52.96875 49.03125 C 52.96875 61.078125 52.921875 61.40625 52.03125 61.40625 C 51.28125 61.40625 51.09375 61.734375 51.09375 63.046875 L 51.09375 64.6875 L 45.46875 64.6875 L 45.46875 61.40625 L 38.4375 61.40625 L 38.4375 81.09375 L 37.03125 81.09375 C 35.71875 81.09375 35.625 81.234375 35.625 82.734375 L 35.625 84.375 L 29.0625 84.375 L 29.0625 81.09375 L 22.5 81.09375 L 22.5 75 L 25.3125 75 L 25.3125 66.703125 L 23.953125 66.703125 C 22.78125 66.703125 22.5 66.9375 22.359375 67.921875 C 22.265625 68.578125 22.125 64.546875 22.078125 58.96875 C 22.03125 52.171875 22.171875 48.796875 22.546875 48.65625 C 22.828125 48.5625 21.890625 45.984375 20.34375 42.65625 C 18.234375 37.921875 17.625 36.140625 17.390625 33.421875 L 17.0625 30 L 19.78125 29.484375 C 21.890625 29.0625 22.5 28.734375 22.5 28.125 C 22.5 27.65625 22.640625 26.953125 22.78125 26.53125 C 23.015625 25.875 22.59375 25.78125 19.734375 25.78125 L 16.40625 25.78125 L 16.40625 30.375 C 16.40625 34.921875 16.359375 35.0625 13.78125 41.0625 L 11.203125 47.109375 L 11.15625 58.125 C 11.15625 64.171875 11.0625 68.625 10.921875 67.921875 C 10.78125 66.9375 10.5 66.75 9.140625 66.75 L 7.5 66.75 L 7.5 75 L 10.3125 75 L 10.3125 120 L 110.15625 120 L 110.15625 75 L 111.328125 75 C 112.5 75 112.5 74.953125 112.5 70.828125 C 112.5 66.703125 112.5 66.703125 111.375 66.890625 C 110.671875 67.03125 110.109375 67.5 110.015625 68.15625 C 109.921875 68.671875 109.78125 64.546875 109.734375 58.96875 C 109.6875 52.546875 109.875 48.75 110.15625 48.65625 C 110.4375 48.5625 109.40625 45.65625 107.859375 42.1875 C 105.703125 37.265625 105.046875 35.203125 104.90625 32.953125 L 104.71875 30 L 107.4375 29.484375 C 109.546875 29.0625 110.15625 28.734375 110.15625 28.125 C 110.15625 27.65625 110.296875 26.953125 110.4375 26.578125 C 110.625 25.96875 110.109375 25.828125 107.4375 25.6875 L 104.15625 25.546875 L 103.96875 30.703125 C 103.734375 35.71875 103.6875 36.046875 101.296875 41.484375 L 98.8125 47.109375 L 98.8125 58.125 C 98.8125 64.171875 98.71875 68.671875 98.578125 68.0625 C 98.4375 67.21875 98.0625 67.03125 96.75 67.03125 L 95.15625 67.03125 L 95.15625 75 L 97.96875 75 L 97.96875 81.09375 L 91.875 81.09375 L 91.875 84.375 L 85.3125 84.375 L 85.3125 82.734375 C 85.3125 81.234375 85.21875 81.09375 83.90625 81.09375 L 82.5 81.09375 L 82.5 61.40625 L 76.40625 61.40625 L 76.40625 64.6875 L 70.78125 64.6875 L 70.78125 63.046875 C 70.78125 61.921875 70.546875 61.40625 70.078125 61.40625 C 69.46875 61.40625 69.375 59.71875 69.375 49.03125 C 69.375 37.125 69.421875 36.609375 70.265625 36.46875 C 71.109375 36.328125 70.6875 35.203125 66.515625 25.78125 L 61.875 15.234375 L 62.015625 11.015625 L 62.109375 6.796875 L 66.09375 6.046875 L 70.078125 5.34375 L 70.40625 3.28125 C 70.59375 2.15625 70.59375 1.03125 70.40625 0.890625 C 70.21875 0.703125 68.0625 0.46875 65.53125 0.375 L 61.03125 0.234375 Z M 60.84375 7.96875 "/>
                </g>
            </svg>}

    </Wrapper>

}