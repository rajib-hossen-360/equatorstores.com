'use client';

import React from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

export function SizeGuideModal({ isOpen, onClose, category }: SizeGuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Men&apos;s Size Guide — {category}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close size guide">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p className="size-guide-intro">
            Measurements are provided in inches and centimeters. For best results, measure over undergarments with a flexible tape measure.
          </p>

          <div className="table-responsive">
            <table className="size-table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest (in / cm)</th>
                  <th>Waist (in / cm)</th>
                  <th>Hip (in / cm)</th>
                  <th>Length (in / cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>S / 30</b></td>
                  <td>36–38&quot; / 91–96 cm</td>
                  <td>29–31&quot; / 74–79 cm</td>
                  <td>36–38&quot; / 91–96 cm</td>
                  <td>28.5&quot; / 72 cm</td>
                </tr>
                <tr>
                  <td><b>M / 32</b></td>
                  <td>39–41&quot; / 99–104 cm</td>
                  <td>32–34&quot; / 81–86 cm</td>
                  <td>39–41&quot; / 99–104 cm</td>
                  <td>29.5&quot; / 75 cm</td>
                </tr>
                <tr>
                  <td><b>L / 34</b></td>
                  <td>42–44&quot; / 106–112 cm</td>
                  <td>35–37&quot; / 89–94 cm</td>
                  <td>42–44&quot; / 106–112 cm</td>
                  <td>30.5&quot; / 77 cm</td>
                </tr>
                <tr>
                  <td><b>XL / 36</b></td>
                  <td>45–47&quot; / 114–119 cm</td>
                  <td>38–40&quot; / 96–101 cm</td>
                  <td>45–47&quot; / 114–119 cm</td>
                  <td>31.5&quot; / 80 cm</td>
                </tr>
                <tr>
                  <td><b>XXL / 38</b></td>
                  <td>48–50&quot; / 122–127 cm</td>
                  <td>41–43&quot; / 104–109 cm</td>
                  <td>48–50&quot; / 122–127 cm</td>
                  <td>32.0&quot; / 81 cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="size-guide-tips">
            <h4>Fit Recommendation</h4>
            <ul>
              <li><b>Trousers & Chinos:</b> If you fall between two waist sizes, we recommend sizing up for tailored comfort.</li>
              <li><b>Outerwear & Blazers:</b> Designed with room to layer over a sweater or shirt. Order your standard chest size.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
