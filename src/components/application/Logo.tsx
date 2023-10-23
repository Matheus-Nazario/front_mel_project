interface LogoProps {
  width?: number;
}

export function Logo({ width }: LogoProps) {
  return (
    <div style={{ width: width }}>
     <svg xmlns="http://www.w3.org/2000/svg" width="190" height="198" viewBox="0 0 400 198" version="1.1"><path d="M 101 160.583 C 101 163.816, 101.368 165.038, 102.250 164.730 C 102.938 164.489, 103.357 163.439, 103.183 162.396 C 102.910 160.764, 103.093 160.816, 104.501 162.767 C 106.606 165.683, 108 164.780, 108 160.500 C 108 156.741, 106.031 154.526, 105.948 158.191 L 105.895 160.500 104.326 158.250 C 101.953 154.849, 101 155.518, 101 160.583 M 117.548 159.539 C 116.697 161.577, 116 163.639, 116 164.122 C 116 165.458, 117.772 165.169, 118.286 163.750 C 118.640 162.772, 119.179 162.759, 120.762 163.691 C 121.874 164.346, 123.021 164.646, 123.311 164.356 C 124.090 163.576, 122.057 158.292, 120.470 156.975 C 119.371 156.063, 118.786 156.576, 117.548 159.539 M 132 160.441 C 132 162.948, 132.450 165, 133 165 C 133.550 165, 134 163.227, 134 161.059 C 134 158.891, 133.550 156.840, 133 156.500 C 132.389 156.122, 132 157.656, 132 160.441 M 143.032 160.320 C 143.003 164.705, 143.195 165.110, 145.172 164.820 C 147.768 164.438, 148.896 162, 146.476 162 C 145.437 162, 144.993 161.460, 145.324 160.597 C 145.620 159.826, 145.233 158.363, 144.463 157.347 C 143.201 155.681, 143.060 155.973, 143.032 160.320 M 166.667 156.667 C 165.497 157.837, 165.952 163.768, 167.250 164.262 C 167.938 164.523, 169.512 164.361, 170.750 163.901 C 174.023 162.684, 173.822 158.263, 170.435 156.975 C 167.386 155.816, 167.507 155.826, 166.667 156.667 M 181.709 156.624 C 181.319 157.014, 181 158.803, 181 160.599 C 181 162.904, 181.547 164.039, 182.859 164.455 C 185.353 165.247, 188.176 164.085, 187.258 162.645 C 186.856 162.015, 186.521 160.375, 186.514 159 C 186.504 157.251, 185.887 156.412, 184.459 156.208 C 183.336 156.047, 182.099 156.235, 181.709 156.624 M 197.250 156.662 C 196.563 156.940, 196 157.992, 196 159 C 196 160.008, 196.563 161.060, 197.250 161.338 C 198.250 161.741, 198.250 161.858, 197.250 161.921 C 194.893 162.070, 195.998 164, 198.441 164 C 201.391 164, 202.585 162.410, 201.038 160.545 C 200.190 159.524, 200.195 158.997, 201.058 158.464 C 201.902 157.943, 201.847 157.518, 200.857 156.890 C 199.363 155.944, 199.076 155.925, 197.250 156.662 M 210 160.500 C 210 162.975, 210.450 165, 211 165 C 211.550 165, 212 162.975, 212 160.500 C 212 158.025, 211.550 156, 211 156 C 210.450 156, 210 158.025, 210 160.500 M 223.239 156.734 C 222.545 156.976, 221.501 158.064, 220.919 159.151 C 219.568 161.675, 221.316 164, 224.563 164 C 227.393 164, 228.670 162.243, 226.988 160.663 C 226.045 159.777, 225.641 159.798, 225.292 160.750 C 224.652 162.495, 223 162.315, 223 160.500 C 223 159.667, 223.889 159, 225 159 C 226.100 159, 227 158.598, 227 158.107 C 227 156.952, 224.857 156.170, 223.239 156.734 M 236 160.500 C 236 162.975, 236.450 165, 237 165 C 237.550 165, 238 164, 238 162.777 L 238 160.555 239.568 162.794 C 241.600 165.694, 243 164.758, 243 160.500 C 243 156.741, 241.031 154.526, 240.948 158.191 L 240.895 160.500 239.326 158.250 C 236.963 154.863, 236 155.514, 236 160.500 M 252 159.883 C 252 163.029, 252.413 163.875, 254.174 164.335 C 257.241 165.137, 258.068 164.308, 257 161.500 C 256.390 159.895, 256.439 158.847, 257.145 158.410 C 258.472 157.590, 256.272 156.037, 253.750 156.015 C 252.381 156.003, 252 156.846, 252 159.883 M 260.900 156.500 C 260.845 156.775, 260.800 158.125, 260.800 159.500 C 260.800 164.988, 260.938 165.462, 262.176 164.224 C 263.035 163.365, 263.710 163.344, 264.676 164.146 C 265.404 164.750, 266.030 165.077, 266.067 164.872 C 267.025 159.588, 266.816 157.972, 265.054 157.029 C 262.998 155.929, 261.064 155.682, 260.900 156.500 M 169 160.500 C 169 161.325, 169.450 162, 170 162 C 170.550 162, 171 161.325, 171 160.500 C 171 159.675, 170.550 159, 170 159 C 169.450 159, 169 159.675, 169 160.500" stroke="none" fill="#151315" fill-rule="evenodd"/><path d="M 218.500 8.929 C 211.750 10.558, 206.431 15.195, 205.229 20.500 C 204.661 23.005, 204.445 22.460, 203.922 17.197 C 203.209 10.030, 201.722 7.598, 199.754 10.378 C 199.064 11.351, 192.881 24.313, 186.013 39.182 L 173.526 66.216 167.806 54.358 C 151.583 20.725, 145.528 9, 144.384 9 C 143.648 9, 142.906 10.771, 142.602 13.250 C 142.027 17.940, 139.911 36.693, 137.442 58.967 C 136.560 66.923, 135.426 74.204, 134.921 75.147 C 134.417 76.089, 133.026 77.004, 131.831 77.180 C 130.635 77.356, 129.471 78.063, 129.245 78.750 C 128.933 79.697, 131.397 80, 139.417 80 C 145.978 80, 150 79.610, 150 78.975 C 150 78.411, 148.641 77.678, 146.979 77.346 C 145.318 77.014, 143.731 76.374, 143.454 75.925 C 143.176 75.476, 143.429 70.247, 144.014 64.304 C 144.600 58.362, 145.324 49.450, 145.622 44.500 C 145.921 39.550, 146.387 34.825, 146.658 34 C 146.929 33.174, 152.397 43.057, 158.826 55.994 C 165.246 68.915, 171.070 79.643, 171.767 79.833 C 172.928 80.149, 182.303 61.702, 192.011 40 C 193.856 35.875, 195.689 32.117, 196.085 31.648 C 196.480 31.180, 197.101 34.780, 197.466 39.648 C 197.830 44.517, 198.772 54.655, 199.560 62.177 C 200.349 69.699, 200.737 76.521, 200.424 77.336 C 199.701 79.221, 201.431 79.723, 211.500 80.554 C 220.395 81.287, 226.264 80.156, 231.552 76.690 C 239.696 71.351, 241.104 57.169, 234.372 48.270 C 233.029 46.494, 228.096 41.813, 223.411 37.868 C 211.324 27.689, 209.398 22.944, 214.867 16.823 C 217.415 13.971, 218.305 13.623, 222.866 13.691 C 229.125 13.786, 232.661 15.911, 233.786 20.255 C 235.143 25.492, 236.478 24.001, 236.792 16.897 L 237.085 10.293 231.376 9.147 C 225.093 7.885, 222.974 7.849, 218.500 8.929 M 206.028 35.500 C 206.092 41.639, 209.928 70.997, 210.904 72.821 C 212.279 75.390, 215.838 76.450, 220.527 75.689 C 225.350 74.907, 228.797 72.097, 230.111 67.878 C 232.241 61.044, 230.062 57.673, 214.596 43.875 C 211.899 41.469, 208.863 38.150, 207.850 36.500 C 206.350 34.058, 206.011 33.872, 206.028 35.500 M 25 119.467 L 25 148.933 50.250 149.217 C 64.138 149.372, 76.513 149.335, 77.750 149.133 C 79.351 148.873, 80 148.080, 80 146.383 L 80 144 55.500 144 L 31 144 31 120 L 31 96 120.250 95.955 C 269.973 95.881, 286.605 95.880, 312.500 95.941 L 337.500 96 337.376 119.750 L 337.252 143.500 312.626 143.767 L 288 144.035 288 146.401 C 288 147.824, 288.698 148.938, 289.750 149.197 C 290.712 149.433, 298.925 149.511, 308 149.369 C 317.075 149.227, 328.663 149.086, 333.750 149.056 L 343 149 343 119.500 L 343 90 184 90 L 25 90 25 119.467 M 54.668 105.750 C 54.421 106.162, 53.649 112.350, 52.953 119.500 C 52.013 129.151, 51.276 132.804, 50.093 133.679 C 48.703 134.707, 48.691 134.920, 50 135.347 C 55.897 137.275, 59.364 136.349, 56.985 133.482 C 56.161 132.489, 56.023 130.132, 56.536 125.776 C 57.191 120.210, 57.390 119.783, 58.297 122 C 62.468 132.189, 64.452 136.017, 65.401 135.708 C 66.006 135.512, 67.824 132.122, 69.442 128.175 C 71.061 124.229, 72.728 121, 73.149 121 C 73.569 121, 74.045 124.263, 74.206 128.250 L 74.500 135.500 78.750 135.807 C 83.197 136.129, 84.369 134.803, 81.158 133.084 C 79.623 132.263, 79.120 129.981, 78.151 119.443 C 76.459 101.059, 76.046 100.887, 70.058 116.081 L 65.691 127.162 61.181 116.081 C 56.971 105.736, 55.795 103.871, 54.668 105.750 M 89.276 106.362 C 88.983 106.836, 89.281 107.555, 89.937 107.961 C 91.507 108.931, 91.565 131.614, 90.002 133.497 C 88.379 135.454, 90.084 136.100, 96.954 136.133 C 104.163 136.167, 105 135.731, 105 131.941 C 105 128.849, 103.343 127.943, 102.362 130.500 C 102.045 131.325, 100.709 132, 99.393 132 C 97.188 132, 97 131.607, 97 127 C 97 121.708, 98.835 120.191, 100.932 123.750 C 101.833 125.278, 102.094 125.310, 102.991 124 C 103.556 123.175, 103.902 121.375, 103.759 120 C 103.533 117.821, 103.083 117.542, 100.250 117.825 C 97.009 118.150, 97 118.137, 97 113.575 C 97 108.518, 98.792 107.437, 101.283 110.994 C 103.020 113.473, 104 112.604, 104 108.583 L 104 105.500 96.905 105.500 C 93.002 105.500, 89.569 105.888, 89.276 106.362 M 155.113 107.583 C 151.650 111.986, 152.703 116.715, 158.602 123.244 C 162.902 128.004, 163.102 132.500, 159.013 132.500 C 157.261 132.500, 156.120 131.651, 155.149 129.626 C 154.096 127.427, 153.567 127.075, 152.901 128.126 C 151.806 129.855, 151.779 133.104, 152.846 134.785 C 153.295 135.492, 155.292 136.335, 157.285 136.659 C 160.419 137.167, 161.335 136.819, 164.079 134.075 C 166.886 131.268, 167.187 130.434, 166.702 126.818 C 166.296 123.790, 165.078 121.636, 161.991 118.491 C 159.060 115.504, 157.928 113.570, 158.164 111.953 C 158.619 108.841, 160.451 108.451, 162.938 110.938 C 165.785 113.785, 166.167 113.561, 165.810 109.250 C 165.511 105.628, 165.359 105.490, 161.363 105.198 C 157.874 104.943, 156.896 105.317, 155.113 107.583 M 179.029 118.203 C 176.670 125.695, 174.022 132.210, 172.964 133.126 C 170.482 135.274, 171.417 136, 176.667 136 C 180.972 136, 181.893 135.293, 180.025 133.425 C 179.391 132.791, 179.450 131.145, 180.192 128.725 C 181.140 125.639, 181.794 125, 184.009 125 C 186.247 125, 186.872 125.631, 187.842 128.866 C 188.479 130.992, 189 133.467, 189 134.366 C 189 135.636, 190.003 136, 193.500 136 C 198.523 136, 198.902 135.570, 196.002 133.160 C 194.825 132.182, 192.239 126.186, 189.710 118.569 C 187.348 111.457, 184.921 105.474, 184.316 105.272 C 183.676 105.059, 181.464 110.469, 179.029 118.203 M 204 119 C 204 128.304, 203.640 133, 202.927 133 C 202.336 133, 202.005 133.785, 202.189 134.745 C 202.456 136.130, 203.350 136.421, 206.513 136.152 C 211.452 135.733, 211.733 135.467, 209.661 133.177 C 208.413 131.799, 208 129.410, 208 123.571 L 208 115.799 211.750 120.716 C 220.394 132.051, 224.558 136.864, 225.500 136.608 C 226.085 136.449, 226.616 130.794, 226.780 122.984 C 226.937 115.521, 227.526 109.071, 228.116 108.360 C 229.740 106.403, 228.363 105.200, 224.500 105.200 C 220.694 105.200, 218.917 106.713, 221.122 108.075 C 222.076 108.665, 222.605 111.628, 222.842 117.713 L 223.184 126.500 218.522 120.500 C 215.958 117.200, 212.205 112.381, 210.180 109.790 C 204.409 102.405, 204 103.014, 204 119 M 235.630 107.250 C 234.674 110.818, 234.890 112, 236.500 112 C 237.325 112, 238 111.550, 238 111 C 238 110.450, 239.350 110, 241 110 L 244 110 244 121.500 C 244 128.500, 243.609 133, 243 133 C 241.067 133, 242.024 135.773, 244.149 136.329 C 248.786 137.541, 254.471 134.885, 250.500 133.362 C 249.284 132.895, 249 130.557, 249 121.032 L 249 109.277 251.582 109.771 C 253.002 110.042, 254.400 110.880, 254.689 111.632 C 255.734 114.354, 257 112.912, 257 109 L 257 105 246.617 105 C 236.694 105, 236.207 105.100, 235.630 107.250 M 269.509 107.171 C 266.082 109.867, 263.044 116.365, 263.044 121 C 263.044 126.110, 266.368 132.636, 270.192 135.032 C 276.320 138.872, 284.606 136.072, 288.248 128.929 C 290.662 124.196, 290.558 115.428, 288.040 111.299 C 284.215 105.024, 274.882 102.946, 269.509 107.171 M 301.073 107.635 C 297.489 112.191, 298.812 117.638, 304.911 123.437 C 306.610 125.052, 308 127.360, 308 128.565 C 308 133.155, 302.426 134.343, 301.288 129.995 C 300.391 126.562, 298 127.631, 298 131.465 C 298 139.665, 310.670 138.398, 312.344 130.030 C 313.164 125.931, 311.677 122.458, 306.871 117.244 C 304.394 114.557, 303.061 112.283, 303.418 111.352 C 303.738 110.518, 304 109.648, 304 109.418 C 304 108.040, 308.112 109.341, 309 111 C 310.625 114.036, 312 113.397, 312 109.607 C 312 105.937, 310.778 105, 305.991 105 C 304.108 105, 302.444 105.891, 301.073 107.635 M 112 107.393 C 112 108.159, 112.675 109.045, 113.500 109.362 C 115.681 110.199, 115.691 131.182, 113.511 132.991 C 110.883 135.172, 112.931 136, 120.952 136 C 127.173 136, 128.911 135.674, 129.393 134.418 C 130.470 131.611, 130.040 129, 128.500 129 C 127.675 129, 127 129.675, 127 130.500 C 127 131.548, 125.944 132, 123.500 132 L 120 132 120 120.607 C 120 111.197, 120.272 109.110, 121.563 108.614 C 124.508 107.484, 121.884 106, 116.941 106 C 113.384 106, 112 106.390, 112 107.393 M 271.073 111.635 C 266.907 116.930, 268.630 129.126, 273.945 131.970 C 277.035 133.624, 279.486 133.176, 282.003 130.497 C 285.404 126.877, 285.502 116.904, 282.182 112.250 C 279.129 107.970, 274.171 107.696, 271.073 111.635 M 183.015 118.691 C 183.007 119.896, 183.450 121.160, 184 121.500 C 185.273 122.287, 185.273 119.970, 184 118 C 183.212 116.781, 183.028 116.910, 183.015 118.691 M 133.951 160.276 C 134.438 164.396, 134.459 164.417, 134.798 161.123 C 134.989 159.265, 134.765 157.365, 134.299 156.899 C 133.833 156.433, 133.677 157.953, 133.951 160.276 M 186.492 159.019 C 186.530 160.601, 186.856 162.190, 187.217 162.550 C 187.577 162.911, 187.832 161.793, 187.783 160.067 C 187.734 158.341, 187.408 156.752, 187.059 156.536 C 186.709 156.320, 186.455 157.438, 186.492 159.019 M 212.272 161 C 212.272 163.475, 212.467 164.488, 212.706 163.250 C 212.944 162.012, 212.944 159.988, 212.706 158.750 C 212.467 157.512, 212.272 158.525, 212.272 161 M 226.651 158.468 C 226.341 159.275, 226.518 160.202, 227.044 160.527 C 227.570 160.852, 228 160.191, 228 159.059 C 228 156.644, 227.444 156.401, 226.651 158.468 M 242.921 161.249 C 242.623 163.399, 242.776 164.624, 243.279 164.121 C 243.762 163.638, 243.995 161.951, 243.798 160.372 C 243.468 157.728, 243.399 157.798, 242.921 161.249 M 173.116 160.782 C 173.047 162.146, 172.094 163.429, 170.750 163.969 C 169.227 164.581, 169.026 164.894, 170.128 164.937 C 172.331 165.022, 174.271 162.502, 173.699 160.298 C 173.337 158.905, 173.206 159.014, 173.116 160.782 M 199 164 L 196.500 164.801 199.250 164.900 C 200.762 164.955, 202 164.550, 202 164 C 202 163.450, 201.887 163.045, 201.750 163.100 C 201.613 163.155, 200.375 163.560, 199 164 M 225 164 L 222.500 164.801 225.250 164.900 C 226.762 164.955, 228 164.550, 228 164 C 228 163.450, 227.887 163.045, 227.750 163.100 C 227.613 163.155, 226.375 163.560, 225 164" stroke="none" fill="#e0bb64" fill-rule="evenodd"/></svg>
    </div>
  );
}
