import React from "react";
import { useRecoilValue } from "recoil";
import { motion } from "framer-motion";

import { filteredQueryResultsSelector } from "../../state/selectors";
import { iconColorAtom, iconSizeAtom } from "../../state/atoms";
import "./IconGrid.css";

type IconGridProps = {};

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

const IconGrid: React.FC<IconGridProps> = () => {
  const color = useRecoilValue(iconColorAtom);
  const size = useRecoilValue(iconSizeAtom);
  const filteredQueryResults = useRecoilValue(filteredQueryResultsSelector);

  return (
    <motion.div className="grid">
      {filteredQueryResults.map((icon) => (
        <motion.div
          key={`ph-${icon.name}-${icon.style}`}
          className="grid-item"
          whileHover={{ scale: 1.2, zIndex: 1, backgroundColor: "rgb(80, 220, 240)" }}
          transition={{ duration: 0.2 }}
        >
          {/* <img
            color={color}
            style={{ height: size, width: size }}
            src={icon.asset}
            alt={`${icon.name} icon`}
            width="100%"
          /> */}
          <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>ph-6-square</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR"
                transform="translate(-204.000000, -836.000000)"
              >
                <g
                  id="ph-6-square"
                  transform="translate(204.000000, 836.000000)"
                >
                  <polygon id="Fill-1" points="0 16 16 16 16 0 0 0"></polygon>
                  <path
                    d="M12.5002,2 C13.3283424,2 14.0002,2.67185763 14.0002,3.5 L14.0002,3.5 L14.0002,12.5 C14.0002,13.3281424 13.3283424,14 12.5002,14 L12.5002,14 L3.5002,14 C2.67205763,14 2.0002,13.3281424 2.0002,12.5 L2.0002,12.5 L2.0002,3.5 C2.0002,2.67185763 2.67205763,2 3.5002,2 L3.5002,2 Z M12.5002,3 L3.5002,3 C3.22434237,3 3.0002,3.22414237 3.0002,3.5 L3.0002,3.5 L3.0002,12.5 C3.0002,12.7758576 3.22434237,13 3.5002,13 L3.5002,13 L12.5002,13 C12.7760576,13 13.0002,12.7758576 13.0002,12.5 L13.0002,12.5 L13.0002,3.5 C13.0002,3.22414237 12.7760576,3 12.5002,3 L12.5002,3 Z M8.68254638,4.56645635 C8.89513608,4.68915997 8.98352787,4.94440165 8.90359492,5.16757927 L8.86564365,5.24944638 L7.85282188,7.00392446 C8.29007993,6.97474335 8.73199934,7.0740957 9.12489386,7.30008038 L9.12489386,7.30008038 L9.29386898,7.40805384 C9.72888544,7.71376231 10.0373271,8.15855494 10.1734941,8.66683399 C10.3268496,9.23795093 10.2504388,9.85092548 9.94876178,10.3742416 C9.64716392,10.8973449 9.15475538,11.2690252 8.58226601,11.4223941 C8.0101937,11.5760061 7.39807854,11.5000007 6.87630614,11.1979196 C6.35246877,10.8966194 5.98037525,10.4044519 5.82663095,9.83188663 C5.67314747,9.25896983 5.74909436,8.64698709 6.05188686,8.12398186 C6.05369059,8.12086632 6.05550102,8.11775614 6.05731812,8.11465133 L7.99955635,4.74955362 C8.13759792,4.51039021 8.44338298,4.42841477 8.68254638,4.56645635 Z M8.62630614,8.16691962 C8.33337246,7.99843033 7.99451471,7.95640146 7.67522247,8.04267312 C7.35874418,8.12692081 7.08639562,8.33296658 6.91731314,8.62501814 C6.74908295,8.91559756 6.7070847,9.25402094 6.79249411,9.57283399 C6.87803784,9.89141061 7.08390359,10.1637089 7.37611814,10.3317869 C7.66663056,10.4999783 8.00495914,10.541988 8.32321337,10.456531 C8.64237347,10.3710285 8.91492409,10.1653016 9.08243822,9.8747584 C9.25053333,9.58320754 9.29287479,9.24334675 9.20763095,8.92588663 C9.12225886,8.60721321 8.91666229,8.33502286 8.62630614,8.16691962 Z"
                    id="Combined-Shape"
                    fill={color}
                    fillRule="nonzero"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <p style={{ padding: 16 }}>{icon.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IconGrid;
