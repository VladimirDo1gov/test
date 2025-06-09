"use client";

import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import RouteTableRow from "./RouteTableRow";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { IRoute } from "./RoutesSection";

interface Props {
    data: IRoute[];
}

export default function RoutesTable({ data }: Props) {
    const [dataRoutes, setDataRoutes] = useState(data);
    const [isSortByIp, setIsSortByIp] = useState(false);
    const [isSortByGateway, setIsSortByGateway] = useState(false);
    const [isSortByInterface, setIsSortByInterface] = useState(false);
    const [sortValue, setSortValue] = useState<"byIP" | "byGateway" | "byInterface" | "">("");

    const sortByIP = useCallback(() => {
        if (isSortByIp) {
            setIsSortByIp(false);
            setDataRoutes((v) => v.sort((a, b) => (a.address < b.address ? 1 : -1)));
        } else {
            setIsSortByIp(true);
            setDataRoutes((v) => v.sort((a, b) => (a.address > b.address ? 1 : -1)));
        }
        setSortValue("byIP");
    }, [isSortByIp]);

    const sortByGateway = useCallback(() => {
        if (isSortByGateway) {
            setDataRoutes((v) => v.sort((a, b) => (a.gateway < b.gateway ? 1 : -1)));
            setIsSortByGateway(false);
        } else {
            setDataRoutes((v) => v.sort((a, b) => (a.gateway > b.gateway ? 1 : -1)));
            setIsSortByGateway(true);
        }
        setSortValue("byGateway");
    }, [isSortByGateway]);

    const sortByInterface = useCallback(() => {
        if (isSortByInterface) {
            setIsSortByInterface(false);
            setDataRoutes((v) => v.sort((a, b) => (a.iface < b.iface ? 1 : -1)));
        } else {
            setIsSortByInterface(true);
            setDataRoutes((v) => v.sort((a, b) => (a.iface > b.iface ? 1 : -1)));
        }
        setSortValue("byInterface");
    }, [isSortByInterface]);

    return (
        <div className="">
            <Table className="w-[100svh]">
                <TableHeader className="bg-gray-200">
                    <TableRow>
                        <TableHead
                            className={cn(
                                "cursor-pointer relative",
                                sortValue === "byIP" ? "font-bold" : ""
                            )}
                            onClick={sortByIP}
                        >
                            Адрес назначения
                            <ChevronsUpDown
                                size={14}
                                className="absolute right-10 top-[50%] transform-[translateY(-50%)]"
                            />
                        </TableHead>
                        <TableHead
                            onClick={sortByGateway}
                            className={cn(
                                "cursor-pointer relative",
                                sortValue === "byGateway" ? "font-bold" : ""
                            )}
                        >
                            Шлюз
                            <ChevronsUpDown
                                size={14}
                                className="absolute right-10 top-[50%] transform-[translateY(-50%)]"
                            />
                        </TableHead>
                        <TableHead>Маска</TableHead>
                        <TableHead
                            onClick={sortByInterface}
                            className={cn(
                                "cursor-pointer relative",
                                sortValue === "byInterface" ? "font-bold" : ""
                            )}
                        >
                            Интерфейс
                            <ChevronsUpDown
                                size={14}
                                className="absolute right-10 top-[50%] transform-[translateY(-50%)]"
                            />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataRoutes.map((route) => {
                        return (
                            <RouteTableRow
                                key={route.uuid}
                                uuid={route.uuid}
                                address={route.address}
                                gateway={route.gateway}
                                mask={route.mask}
                                iface={route.iface}
                            />
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
