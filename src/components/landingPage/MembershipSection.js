import React from 'react';
import membershipData from '../../data/membershipData';
import Popup from 'reactjs-popup';
import membershipModalData from '../../data/membershipModalData';
import MembershipModalCard from './MembershipModalCard';

export default function MembershipSection() {
  return (
    <div>
      <h3>Choose Your Membership</h3>
      <p>One Membership at a Time</p>
      <div>
        {
          membershipData.map((m) => (
            <div>
              <h3>{m.name}</h3>
              <p>{m.bio}</p>
              <Popup
                trigger={<button className="button"> Learn More </button>}
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    {
                      membershipModalData.map((m2) => {
                        if (m.id === m2.id) {
                          return <MembershipModalCard m2={m2} />;
                        }
                      })
                    }
                    <button>Checkout</button>
                  </div>
                )}
              </Popup>
            </div>

          ))
        }
      </div>
    </div>
  );
}
