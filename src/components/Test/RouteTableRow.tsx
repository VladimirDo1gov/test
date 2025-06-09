import { TableRow, TableCell } from "../ui/table";
import { IRoute } from "./RoutesSection";

export default function RouteTableRow({ address, gateway, iface, mask }: IRoute) {
    return (
        <TableRow className="w-[200px]">
            <TableCell className="font-medium">{address}</TableCell>
            <TableCell>{gateway}</TableCell>
            <TableCell>{mask}</TableCell>
            <TableCell>{iface}</TableCell>
        </TableRow>
    );
}
