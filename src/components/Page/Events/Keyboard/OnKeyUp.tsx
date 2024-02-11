"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function OnKeyDownEx() {
  const [score, setScore] = useState<{ key: string; score: number }>({
    key: "",
    score: 0,
  });
  const [record, setRecord] = useState<{ key: string; score: number }[]>([]);
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    event.currentTarget.value = event.key;
    setScore({ key: event.key, score: score.score + 1 });
  }
  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    const existingRecordIndex = record.findIndex(
      (rec) => rec.key === score.key
    );

    if (existingRecordIndex !== -1) {
      const updatedRecord = [...record]; // Create a copy of the existing record array
      const existingScore = updatedRecord[existingRecordIndex].score;

      // If the new score is greater than the existing score, update the record
      if (score.score > existingScore) {
        updatedRecord[existingRecordIndex] = {
          key: score.key,
          score: score.score,
        };
        setRecord(updatedRecord); // Update the state with the modified record
      }
    } else {
      // If the key is not present in the record, add a new entry to the record
      setRecord([...record, { key: score.key, score: score.score }]);
    }
    setScore({ key: "", score: 0 });
  }

  return (
    <>
      <div>
        <p>Key records:</p>
        {record.map((key, index) => (
          <span key={index}>
            <span key={`k-${index}`}>{key.key}:</span>
            <span key={`s-${index}`} className="text-blue-500">
              {key.score}
            </span>
            ,
          </span>
        ))}
      </div>
      <p>
        {"score: "}
        {score.score}
      </p>
      <input
        className="input"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      hold down any key
    </>
  );
}
