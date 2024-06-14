export const Calendar = () => {
  return (
    <>
      <div className="rounded-lg overflow-hidden">
        <div>
          <div className="text-3xl mb-2 text-center text-gold/80">
            JUNIO 2024
          </div>
          <div className="grid grid-cols-7 text-center">
            {/* Header */}
            <div className="mb-4 text-black">DO</div>
            <div className="mb-4 text-black">LU</div>
            <div className="mb-4 text-black">MA</div>
            <div className="mb-4 text-black">MI</div>
            <div className="mb-4 text-black">JU</div>
            <div className="mb-4 text-black">VI</div>
            <div className="mb-4 text-black">SA</div>
            {/* Days of previous and next month */}
            <div className="text-gray-400 p-2 rounded-tl hover:bg-gold-light/40">
              26
            </div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">27</div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">28</div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">29</div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">30</div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">31</div>
            <div className="p-2 rounded-tr text-black hover:bg-gold-light/40">
              1
            </div>
            {/* Current month days */}
            <div className="hover:bg-gold-light/40 p-2 text-black">2</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">3</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">4</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">5</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">6</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">7</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">8</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">9</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">10</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">11</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">12</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">13</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">14</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">15</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">16</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">17</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">18</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">19</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">20</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">21</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">22</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">23</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">24</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">25</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">26</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">27</div>
            <div className="hover:bg-gold-light/40 p-2 text-black">28</div>
            <div className="bg-gold text-black p-2">29</div>
            {/* Days of next month */}
            <div className="text-black p-2 rounded-bl hover:bg-gold-light/40">
              30
            </div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">1</div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">2</div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">3</div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">4</div>
            <div className="text-gray-400 p-2 hover:bg-gold-light/40">5</div>
            <div className="text-gray-400 p-2 bg-white rounded-br hover:bg-gold-light/40">
              6
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gold/80 text-2xl mt-3 text-center text-black rounded-lg py-1">
        29 de Junio a las 6:00 PM
      </div>
    </>
  );
};

export default Calendar;
