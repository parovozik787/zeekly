import { responsiveSize } from '../../shared/utils';

export const createTooltipContent = (params: any): string => {
  const date = new Date(params[0].axisValue).toLocaleDateString();
  let content = `<div class="chart-tooltip">`;

  content += `<div class="chart-tooltip__date">${date}</div>`;

  params.forEach((item: any) => {
    content += `
          <div class="chart-tooltip__info-item">
            <p style="display: flex; align-items: center; justify-content: start">
              <span class="legend-icon legend-icon--${item.seriesType}" style="background:${item.color}"></span>
              — ${item.seriesName}
            </p>
            <p class="chart-tooltip__info-item-value">
              ${item.value[1]}
            </p>
          </div>
        `;
  });

  content += `
      <div style="
        content: '';
        position: absolute;
        bottom: -${responsiveSize(8)}px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: ${responsiveSize(8)}px solid transparent;
        border-right: ${responsiveSize(8)}px solid transparent;
        border-top: ${responsiveSize(8)}px solid white;
      "></div>`;

  content += `</div>`;

  return content;
};

export default createTooltipContent;
