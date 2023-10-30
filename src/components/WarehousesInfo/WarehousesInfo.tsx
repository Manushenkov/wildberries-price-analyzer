import "./WarehousesInfo.scss";
import { h } from "dom-chef";
import { cn as classnames } from "@bem-react/classname";
import companyIcon from "../../img/companyIcon";
import findClosestWarehouse from "../../helpers/findClosestWarehouse";
import { Warehouse } from "../../types/common";

const React = h;

const cn = classnames('inject-warehouses')

export default function WarehousesInfo(warehouses: Warehouse[]) {
    const closestWarehouse = findClosestWarehouse(warehouses)

    return (
        <div className={cn("container", ["product-page__seller-wrap"])}>
            <div className={cn("content", ['seller-info__header'])}>
                <img className={cn("company-icon")} src={companyIcon} />
                <div className={cn("table")}>
                    <p className={cn("title")}>Раскладка по складам</p>
                    <p className={cn('warehouse-closest')}>{closestWarehouse.warehouseName}: {closestWarehouse.deliveryDelay} час.</p>
                    <div className={cn('warehouses-list')}>
                        {warehouses.map(WarehouseItem)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function WarehouseItem({ warehouseName, deliveryDelay, quantity }: Warehouse) {
    return <>
        <span className={cn('warehouse-name')}>{warehouseName}:</span>
        <b className={cn('warehouse-delivery-time')}>{deliveryDelay} ч.</b>
        <span className={cn('warehouse-amount')}>{quantity} шт.</span>
    </>
}
