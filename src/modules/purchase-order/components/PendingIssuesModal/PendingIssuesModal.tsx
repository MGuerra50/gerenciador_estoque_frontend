"use client";

import { useEffect, useState } from "react";
import Modal from "../../../../shared/components/Modal/Modal";
import ButtonPrincipal from "../../../../shared/components/ButtonPrincipal/ButtonPrincipal";
import ButtonDanger from "../../../../shared/components/ButtonDanger/ButtonDanger";
import LoadingState from "../../../../shared/components/LoadingState/LoadingState";
import { MdOutlineCheckBox } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import type { PendingIssue } from "../../types/purchaseOrder";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  issues: PendingIssue[];
  loading?: boolean;
}

export default function PendingIssuesModal({ isOpen, onClose, issues, loading }: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = issues.find((i) => i.id === selectedId) ?? issues[0] ?? null;

  useEffect(() => {
    if (isOpen && issues.length > 0 && selectedId === null) {
      setSelectedId(issues[0].id);
    }
    if (!isOpen) {
      setSelectedId(null);
    }
  }, [isOpen, issues, selectedId]);

  const handleAction = (action: string) => {
    alert(`${action} for order ${selected?.orderCode} (mock)`);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Pending issues" width={950}>
      {loading ? (
        <LoadingState />
      ) : (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Code of pending orders</h3>
            <div className="flex flex-col gap-2">
              {issues.map((issue) => (
                <button
                  key={issue.id}
                  onClick={() => setSelectedId(issue.id)}
                  className={`text-left px-4 py-3 rounded-lg border-2 cursor-pointer transition ${
                    selected?.id === issue.id
                      ? "border-[#22C55E] bg-green-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  {issue.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 mb-4">
              <ButtonPrincipal width={320} onClick={() => handleAction("Keep the purchase order")}>
                <div className="flex gap-3 items-center justify-center py-2">
                  <MdOutlineCheckBox size={24} />
                  <span className="font-semibold">Keep the purchase order</span>
                </div>
              </ButtonPrincipal>
              <button
                onClick={() => handleAction("Discuss by email")}
                className="bg-blue-500 text-white rounded-lg py-3 flex gap-3 items-center justify-center cursor-pointer hover:bg-blue-600"
              >
                <IoMailOutline size={24} />
                <span className="font-semibold">Discuss by email</span>
              </button>
              <ButtonDanger width={320} onClick={() => handleAction("Cancel the purchase order")}>
                <div className="flex gap-3 items-center justify-center py-2">
                  <IoClose size={24} />
                  <span className="font-semibold">Cancel the purchase order</span>
                </div>
              </ButtonDanger>
            </div>

            {selected && (
              <>
                <table className="w-full text-sm mb-4 bg-gray-100 rounded-lg">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-left">Order code</th>
                      <th className="px-3 py-2 text-left">Status</th>
                      <th className="px-3 py-2 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-2">{selected.orderCode}</td>
                      <td className="px-3 py-2">{selected.status}</td>
                      <td className="px-3 py-2">{selected.dateOfIssue}</td>
                    </tr>
                  </tbody>
                </table>

                <div>
                  <label className="block text-sm font-medium mb-1">Supplier observation</label>
                  <textarea
                    readOnly
                    value={selected.supplierObservation}
                    className="w-full bg-gray-100 rounded-lg p-3 text-sm h-32 resize-none border border-gray-200"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
