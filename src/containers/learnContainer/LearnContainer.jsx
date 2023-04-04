import styles from "./LearnContainer.module.css";
import { useState } from "react";

import FilledCard from "/src/components/filledCard/FilledCard";
import AssistChip from "/src/components/assistChip/AssistChip";
import learnImage1 from "/src/assets/learn1.jpg";
import learnImage2 from "/src/assets/learn2.jpg";
import learnImage3 from "/src/assets/learn3.png";
import learnImage4 from "/src/assets/learn4.jpg";
import learnImage5 from "/src/assets/learn5.png";

export default function LearnContainer() {
  const [currentLearnTab, setCurrentLearnTab] = useState(1);
  return (
    <div className={styles.learnContainer}>
      <div>
        <FilledCard colour="primaryContainer">
          <div className={styles.navigationCard}>
            <AssistChip onClick={() => setCurrentLearnTab(1)}>
              Introduction to MOSFETs
            </AssistChip>
            <AssistChip onClick={() => setCurrentLearnTab(2)}>
              MOSFET Structure and Operation
            </AssistChip>
            <AssistChip onClick={() => setCurrentLearnTab(3)}>
              MOSFET Characteristics
            </AssistChip>
            <AssistChip onClick={() => setCurrentLearnTab(4)}>
              MOSFET Applications
            </AssistChip>
          </div>
        </FilledCard>
      </div>

      {currentLearnTab === 1 && (
        <FilledCard colour="primaryContainer">
          <div className={styles.mainCard}>
            MOSFETs are an important type of transistor used in electronic
            circuits for various applications. They are particularly useful in
            applications where a small input signal needs to control a large
            amount of current. MOSFETs have several advantages over other types
            of transistors, including high input impedance, fast switching
            speeds, low power consumption, and ease of miniaturization. These
            properties make them ideal for use in a wide range of electronic
            devices, from cell phones and computers to industrial equipment and
            automobiles.
            <br />
            <br />
            <img src={learnImage1} />
            <br />
            <br />
            MOSFETs come in several different types, but the most common is the
            enhancement mode MOSFET. This type of MOSFET is used to control the
            flow of current in electronic circuits. The basic structure of a
            MOSFET consists of a metal gate, an insulating oxide layer, and a
            semiconductor channel, with the source and drain regions on either
            side of the channel. The metal gate is separated from the
            semiconductor channel by the oxide layer, which acts as an
            insulator. When a voltage is applied to the gate, it creates an
            electric field that modulates the conductivity of the channel,
            allowing current to flow between the source and drain regions.
            <br />
            <br />
            <img src={learnImage2} />
            <br />
            <br />
            The operation of a MOSFET can be compared to that of a valve, where
            the gate acts as the valve handle and the channel acts as the valve.
            By controlling the voltage applied to the gate, the conductivity of
            the channel can be increased or decreased, allowing the current
            flowing through the device to be controlled. MOSFETs are used in a
            wide range of electronic circuits, including power supplies,
            amplifiers, digital circuits, and more. They are particularly useful
            in power electronics applications, where they can be used to
            efficiently convert electrical power from one voltage level to
            another.
          </div>
        </FilledCard>
      )}
      {currentLearnTab === 2 && (
        <FilledCard colour="primaryContainer">
          <div className={styles.mainCard}>
            MOSFETs, or Metal-Oxide-Semiconductor Field-Effect Transistors, are
            three-terminal devices that are widely used in electronic circuits
            for a variety of applications. The structure of a MOSFET consists of
            three regions: the source, the drain, and the gate. The source and
            drain regions are heavily doped regions of a semiconductor material,
            typically silicon, while the gate is a thin layer of metal oxide
            that is placed on top of the semiconductor. The metal oxide layer
            acts as an insulator, and when a voltage is applied to the gate, an
            electric field is generated that controls the flow of current
            between the source and drain.
            <br />
            <br />
            <img src={learnImage3} />
            <br />
            <br />
            The operation of MOSFETs is based on the principle of modulation of
            the conductive channel between the source and drain regions, by the
            electric field generated by the gate. When a voltage is applied to
            the gate, the electric field induces a charge in the semiconductor
            material beneath the oxide layer, which attracts or repels the
            charge carriers, depending on the polarity of the gate voltage. This
            results in the formation of a conductive channel between the source
            and drain regions, allowing current to flow through the device. The
            conductivity of the channel can be controlled by varying the gate
            voltage, making MOSFETs an ideal device for amplification and
            switching applications.
            <br />
            <br />
            The gate oxide layer of MOSFETs is a crucial component that plays a
            significant role in determining the performance and reliability of
            the device. The thickness of the oxide layer can affect the device's
            threshold voltage, which is the minimum gate voltage required to
            turn on the device. A thinner oxide layer can result in a lower
            threshold voltage, which can lead to higher leakage currents and
            reduced reliability. On the other hand, a thicker oxide layer can
            result in a higher threshold voltage, which can limit the device's
            performance in low-voltage applications.
            <br />
            <br />
            MOSFETs can be designed to operate in two modes: enhancement mode
            and depletion mode. In enhancement mode MOSFETs, the conductive
            channel is not present initially, and the application of a positive
            gate voltage is required to create the channel. In depletion mode
            MOSFETs, the channel is already present, and the application of a
            negative gate voltage is required to deplete the channel, thereby
            reducing the conductivity of the device. These different modes of
            operation make MOSFETs a versatile device that can be used in a wide
            range of applications, from power electronics to integrated
            circuits.
          </div>
        </FilledCard>
      )}
      {currentLearnTab === 3 && (
        <FilledCard colour="primaryContainer">
          <div className={styles.mainCard}>
            MOSFETs have several characteristics that make them ideal for many
            applications. One of their primary advantages is that they require
            very little input current to control the load current, making them
            highly efficient compared to other types of transistors. They also
            have a high input impedance, which means that they can be used to
            amplify signals without loading down the input signal source.
            <br />
            <br />
            <img src={learnImage4} />
            <br />
            <br />
            Another important characteristic of MOSFETs is their ability to
            operate in either enhancement or depletion mode. In enhancement
            mode, the device is normally off until a voltage is applied to the
            gate, which increases the conductivity of the device. In depletion
            mode, the device is normally on until a voltage is applied to the
            gate, which decreases the conductivity of the device.
            <br />
            <br />
            MOSFETs also have a low output impedance, which allows them to drive
            loads with high current levels. They also have a high voltage
            rating, which means they can handle high voltages without breaking
            down or causing damage.
            <br />
            <br />
            One of the most important characteristics of MOSFETs is their
            ability to switch quickly between on and off states, making them
            ideal for use in digital circuits. They also have a linear region of
            operation, allowing them to be used in analog circuits. These
            properties make MOSFETs highly versatile and widely used in a
            variety of applications, from power amplifiers to voltage regulators
            to microprocessors.
          </div>
        </FilledCard>
      )}
      {currentLearnTab === 4 && (
        <FilledCard colour="primaryContainer">
          <div className={styles.mainCard}>
            MOSFETs are widely used in electronic devices and power systems due
            to their excellent properties. One of the most common applications
            of MOSFETs is in switching circuits. In these circuits, MOSFETs are
            used to switch high voltages and currents with minimal power loss.
            MOSFETs are also used in power supplies, motor control, and audio
            amplifiers.
            <br />
            <br />
            <img src={learnImage5} />
            <br />
            <br />
            In power supplies, MOSFETs are used as a switch in a switching
            regulator to convert the input voltage to the desired output
            voltage. The high efficiency of MOSFETs in switching circuits makes
            them ideal for use in power supplies. MOSFETs are also used in motor
            control circuits, where they are used to control the speed of a
            motor.
            <br />
            <br />
            In audio amplifiers, MOSFETs are used to amplify the audio signal.
            MOSFETs have low input capacitance, which makes them suitable for
            use in high-frequency audio applications. MOSFETs are also used in
            radio frequency (RF) circuits, where they are used as amplifiers,
            mixers, and switches.
            <br />
            <br />
            MOSFETs are also used in electronic devices such as smartphones,
            laptops, and televisions. In these devices, MOSFETs are used as
            switches and amplifiers in various circuits. MOSFETs are also used
            in power management circuits in smartphones and laptops to improve
            battery life.
          </div>
        </FilledCard>
      )}
    </div>
  );
}
