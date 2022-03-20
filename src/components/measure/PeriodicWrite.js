import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

const PeriodicWrite = ({ onSumitMeasure }) => {
  const { register, handleSubmit, getValues, setValue } = useForm();

  const onSubmit = (data) => onSumitMeasure(data);

  const calcFmsTotal = useCallback(() => {
    const result =
      getValues("injury_prevention.fms.hurdle_step_total") +
      getValues("injury_prevention.fms.inline_lunge_total") +
      getValues("injury_prevention.fms.shoulder_mobility_total") +
      getValues("injury_prevention.fms.active_straight_leg_raise_total") +
      getValues("injury_prevention.fms.rotary_core_stability_total");
    setValue("injury_prevention.fms.total_score", result);
  }, []);

  const calcDifference = useCallback((num1, num2) => {
    const result = Math.max(num1, num2) - Math.min(num1, num2);
    return result;
  }, []);

  const calcYbalanceScoreLeft = useCallback(() => {
    const result =
      (getValues("injury_prevention.y_balance.anterior_left") +
        getValues("injury_prevention.y_balance.postero_lateral_left") +
        getValues("injury_prevention.y_balance.postero_medial_left")) /
      (getValues("injury_prevention.y_balance.limb_length") * 3);
    setValue(
      "injury_prevention.y_balance.composite_score_left",
      result.toFixed(2)
    );
  }, []);

  const calcYbalanceScoreRight = useCallback(() => {
    const result =
      (getValues("injury_prevention.y_balance.anterior_right") +
        getValues("injury_prevention.y_balance.postero_lateral_right") +
        getValues("injury_prevention.y_balance.postero_medial_right")) /
      (getValues("injury_prevention.y_balance.postero_medial_right") * 3);
    setValue(
      "injury_prevention.y_balance.composite_score_right",
      result.toFixed(2)
    );
  }, []);

  const calcTuckjumpTotal = useCallback(() => {
    const result =
      parseInt(getValues("injury_prevention.tuck_jump.knee_valgus_landing")) +
      parseInt(
        getValues(
          "injury_prevention.tuck_jump.thights_do_not_paralle_peak_jump"
        )
      ) +
      parseInt(
        getValues("injury_prevention.tuck_jump.thight_not_equal_during_flight")
      ) +
      parseInt(
        getValues(
          "injury_prevention.tuck_jump.foot_placement_not_shoulder_width_apart"
        )
      ) +
      parseInt(
        getValues("injury_prevention.tuck_jump.foot_placement_not_parallel")
      ) +
      parseInt(
        getValues("injury_prevention.tuck_jump.foot_contact_timing_not_equal")
      ) +
      parseInt(
        getValues("injury_prevention.tuck_jump.excessive_landing_noise")
      ) +
      parseInt(getValues("injury_prevention.tuck_jump.pause_between_jumps")) +
      parseInt(
        getValues("injury_prevention.tuck_jump.technique_declines_prior_to_10s")
      ) +
      parseInt(
        getValues("injury_prevention.tuck_jump.dose_not_landIng_same_footprint")
      );
    setValue("injury_prevention.tuck_jump.score", result);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="absolute top-8 right-4">
        <input type="date" {...register("date")} />
      </div>
      <div className="grid grid-cols-3 gap-6 pb-14">
        <div className="col-start-1 col-end-4">
          <h2 className="text-3xl font-bold mt-10">Injury Prevention</h2>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">FMS</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Overhead deep squat</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.overhead_deep_squat", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Hurdle step left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.hurdle_step_left", {
                  valueAsNumber: true,
                  onChange: () => {
                    const left = getValues(
                      "injury_prevention.fms.hurdle_step_left"
                    );
                    const right = getValues(
                      "injury_prevention.fms.hurdle_step_right"
                    );
                    setValue(
                      "injury_prevention.fms.hurdle_step_total",
                      Math.min(left, right)
                    );
                    calcFmsTotal();
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Hurdle step right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.hurdle_step_right", {
                  valueAsNumber: true,
                  onChange: () => {
                    const left = getValues(
                      "injury_prevention.fms.hurdle_step_left"
                    );
                    const right = getValues(
                      "injury_prevention.fms.hurdle_step_right"
                    );
                    setValue(
                      "injury_prevention.fms.hurdle_step_total",
                      Math.min(left, right)
                    );
                    calcFmsTotal();
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Hurdle step total</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.hurdle_step_total", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Inline lunge left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.inline_lunge_left", {
                  valueAsNumber: true,
                  onChange: () => {
                    const left = getValues(
                      "injury_prevention.fms.inline_lunge_left"
                    );
                    const right = getValues(
                      "injury_prevention.fms.inline_lunge_right"
                    );
                    setValue(
                      "injury_prevention.fms.inline_lunge_total",
                      Math.min(left, right)
                    );
                    calcFmsTotal();
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Inline lunge right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.inline_lunge_right", {
                  valueAsNumber: true,
                  onChange: () => {
                    const left = getValues(
                      "injury_prevention.fms.inline_lunge_left"
                    );
                    const right = getValues(
                      "injury_prevention.fms.inline_lunge_right"
                    );
                    setValue(
                      "injury_prevention.fms.inline_lunge_total",
                      Math.min(left, right)
                    );
                    calcFmsTotal();
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Inline lunge total</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.inline_lunge_total", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Shoulder mobility left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.shoulder_mobility_left", {
                  valueAsNumber: true,
                  onChange: () => {
                    const left = getValues(
                      "injury_prevention.fms.shoulder_mobility_left"
                    );
                    const right = getValues(
                      "injury_prevention.fms.shoulder_mobility_right"
                    );
                    setValue(
                      "injury_prevention.fms.shoulder_mobility_total",
                      Math.min(left, right)
                    );
                    calcFmsTotal();
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Shoulder mobility right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.shoulder_mobility_right", {
                  valueAsNumber: true,
                  onChange: () => {
                    const left = getValues(
                      "injury_prevention.fms.shoulder_mobility_left"
                    );
                    const right = getValues(
                      "injury_prevention.fms.shoulder_mobility_right"
                    );
                    setValue(
                      "injury_prevention.fms.shoulder_mobility_total",
                      Math.min(left, right)
                    );
                    calcFmsTotal();
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Shoulder mobility total</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.shoulder_mobility_total", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Active straight leg raise left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.active_straight_leg_raise_left",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const left = getValues(
                        "injury_prevention.fms.active_straight_leg_raise_left"
                      );
                      const right = getValues(
                        "injury_prevention.fms.active_straight_leg_raise_right"
                      );
                      setValue(
                        "injury_prevention.fms.active_straight_leg_raise_total",
                        Math.min(left, right)
                      );
                      calcFmsTotal();
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Active straight leg raise right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.active_straight_leg_raise_right",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const left = getValues(
                        "injury_prevention.fms.active_straight_leg_raise_left"
                      );
                      const right = getValues(
                        "injury_prevention.fms.active_straight_leg_raise_right"
                      );
                      setValue(
                        "injury_prevention.fms.active_straight_leg_raise_total",
                        Math.min(left, right)
                      );
                      calcFmsTotal();
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Active straight leg raise total</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.active_straight_leg_raise_total",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trunk stability push up</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.trunk_stability_push_up", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Rotary core stability left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.rotary_core_stability_left",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const left = getValues(
                        "injury_prevention.fms.rotary_core_stability_left"
                      );
                      const right = getValues(
                        "injury_prevention.fms.rotary_core_stability_right"
                      );
                      setValue(
                        "injury_prevention.fms.rotary_core_stability_total",
                        Math.min(left, right)
                      );
                      calcFmsTotal();
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Rotary core stability right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.rotary_core_stability_right",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const left = getValues(
                        "injury_prevention.fms.rotary_core_stability_left"
                      );
                      const right = getValues(
                        "injury_prevention.fms.rotary_core_stability_right"
                      );
                      setValue(
                        "injury_prevention.fms.rotary_core_stability_total",
                        Math.min(left, right)
                      );
                      calcFmsTotal();
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Rotary core stability total</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.fms.rotary_core_stability_total",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Total score</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.fms.total_score", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Y Balance</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Limb length</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.y_balance.limb_length", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Anterior left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.y_balance.anterior_left", {
                  valueAsNumber: true,
                  onChange: () => {
                    const left = getValues(
                      "injury_prevention.y_balance.anterior_left"
                    );
                    const right = getValues(
                      "injury_prevention.y_balance.anterior_right"
                    );
                    const result = calcDifference(left, right);
                    setValue(
                      "injury_prevention.y_balance.anterior_difference",
                      result
                    );
                    calcYbalanceScoreLeft();
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Anterior right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.y_balance.anterior_right", {
                  valueAsNumber: true,
                  onChange: () => {
                    const left = getValues(
                      "injury_prevention.y_balance.anterior_left"
                    );
                    const right = getValues(
                      "injury_prevention.y_balance.anterior_right"
                    );
                    const result = calcDifference(left, right);
                    setValue(
                      "injury_prevention.y_balance.anterior_difference",
                      result
                    );
                    calcYbalanceScoreRight();
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Anterior difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.anterior_difference",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero lateral left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_lateral_left",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const left = getValues(
                        "injury_prevention.y_balance.postero_lateral_left"
                      );
                      const right = getValues(
                        "injury_prevention.y_balance.postero_lateral_right"
                      );
                      const result = calcDifference(left, right);
                      setValue(
                        "injury_prevention.y_balance.postero_lateral_difference",
                        result
                      );
                      calcYbalanceScoreLeft();
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero lateral right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_lateral_right",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const left = getValues(
                        "injury_prevention.y_balance.postero_lateral_left"
                      );
                      const right = getValues(
                        "injury_prevention.y_balance.postero_lateral_right"
                      );
                      const result = calcDifference(left, right);
                      setValue(
                        "injury_prevention.y_balance.postero_lateral_difference",
                        result
                      );
                      calcYbalanceScoreRight();
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero lateral difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_lateral_difference",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero medial left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_medial_left",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const left = getValues(
                        "injury_prevention.y_balance.postero_medial_left"
                      );
                      const right = getValues(
                        "injury_prevention.y_balance.postero_medial_right"
                      );
                      const result = calcDifference(left, right);
                      setValue(
                        "injury_prevention.y_balance.postero_medial_difference",
                        result
                      );
                      calcYbalanceScoreLeft();
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero medial right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_medial_right",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const left = getValues(
                        "injury_prevention.y_balance.postero_medial_left"
                      );
                      const right = getValues(
                        "injury_prevention.y_balance.postero_medial_right"
                      );
                      const result = calcDifference(left, right);
                      setValue(
                        "injury_prevention.y_balance.postero_medial_difference",
                        result
                      );
                      calcYbalanceScoreRight();
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Postero medial difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.postero_medial_difference",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Composite score left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.composite_score_left",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Composite score right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "injury_prevention.y_balance.composite_score_right",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Tuck Jump</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Knee valgus landing</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="knee_valgus_landing_y"
                  {...register(
                    "injury_prevention.tuck_jump.knee_valgus_landing",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="knee_valgus_landing_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="knee_valgus_landing_n"
                  {...register(
                    "injury_prevention.tuck_jump.knee_valgus_landing",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="knee_valgus_landing_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Thights do not paralle peak jump</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="thights_do_not_paralle_peak_jump_y"
                  {...register(
                    "injury_prevention.tuck_jump.thights_do_not_paralle_peak_jump",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="thights_do_not_paralle_peak_jump_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="thights_do_not_paralle_peak_jump_n"
                  {...register(
                    "injury_prevention.tuck_jump.thights_do_not_paralle_peak_jump",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="thights_do_not_paralle_peak_jump_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Thight not equal during flight</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="thight_not_equal_during_flight_y"
                  {...register(
                    "injury_prevention.tuck_jump.thight_not_equal_during_flight",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="thight_not_equal_during_flight_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="thight_not_equal_during_flight_n"
                  {...register(
                    "injury_prevention.tuck_jump.thight_not_equal_during_flight",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="thight_not_equal_during_flight_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Foot placement not shoulder width apart</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="foot_placement_not_shoulder_width_apart_y"
                  {...register(
                    "injury_prevention.tuck_jump.foot_placement_not_shoulder_width_apart",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="foot_placement_not_shoulder_width_apart_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="foot_placement_not_shoulder_width_apart_n"
                  {...register(
                    "injury_prevention.tuck_jump.foot_placement_not_shoulder_width_apart",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="foot_placement_not_shoulder_width_apart_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Foot placement not parallel</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="foot_placement_not_parallel_y"
                  {...register(
                    "injury_prevention.tuck_jump.foot_placement_not_parallel",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="foot_placement_not_parallel_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="foot_placement_not_parallel_n"
                  {...register(
                    "injury_prevention.tuck_jump.foot_placement_not_parallel",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="foot_placement_not_parallel_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Foot contact timing not equal</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="foot_contact_timing_not_equal_y"
                  {...register(
                    "injury_prevention.tuck_jump.foot_contact_timing_not_equal",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="foot_contact_timing_not_equal_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="foot_contact_timing_not_equal_n"
                  {...register(
                    "injury_prevention.tuck_jump.foot_contact_timing_not_equal",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="foot_contact_timing_not_equal_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Excessive landing noise</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="excessive_landing_noise_y"
                  {...register(
                    "injury_prevention.tuck_jump.excessive_landing_noise",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="excessive_landing_noise_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="excessive_landing_noise_n"
                  {...register(
                    "injury_prevention.tuck_jump.excessive_landing_noise",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="excessive_landing_noise_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Pause between jumps</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="pause_between_jumps_y"
                  {...register(
                    "injury_prevention.tuck_jump.pause_between_jumps",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="pause_between_jumps_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="pause_between_jumps_n"
                  {...register(
                    "injury_prevention.tuck_jump.pause_between_jumps",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="pause_between_jumps_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Technique declines prior to 10s</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="technique_declines_prior_to_10s_y"
                  {...register(
                    "injury_prevention.tuck_jump.technique_declines_prior_to_10s",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="technique_declines_prior_to_10s_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="technique_declines_prior_to_10s_n"
                  {...register(
                    "injury_prevention.tuck_jump.technique_declines_prior_to_10s",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="technique_declines_prior_to_10s_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Dose not landIng same footprint</label>
              <div className="w-30 flex-shrink-0">
                <input
                  id="dose_not_landIng_same_footprint_y"
                  {...register(
                    "injury_prevention.tuck_jump.dose_not_landIng_same_footprint",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-3"
                  value={1}
                />
                <label
                  htmlFor="dose_not_landIng_same_footprint_y"
                  className="ml-1 cursor-pointer"
                >
                  Yes
                </label>
                <input
                  id="dose_not_landIng_same_footprint_n"
                  {...register(
                    "injury_prevention.tuck_jump.dose_not_landIng_same_footprint",
                    {
                      valueAsNumber: true,
                      onChange: () => {
                        calcTuckjumpTotal();
                      },
                    }
                  )}
                  type="radio"
                  className="ml-4"
                  value={0}
                />
                <label
                  htmlFor="dose_not_landIng_same_footprint_n"
                  className="ml-1 cursor-pointer"
                >
                  No
                </label>
              </div>
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Score</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("injury_prevention.tuck_jump.score", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="col-start-1 col-end-4">
          <h2 className="text-3xl font-bold mt-12">Performance Test</h2>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Isometric Test</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Rail point</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.rail_point", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Max force left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.max_force_left", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Max force right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.isometric_test.max_force_right",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Max force difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.isometric_test.max_force_difference",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RFD left</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.rfd_left", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RFD right</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.rfd_right", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RFD difference</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.isometric_test.rfd_difference", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">3PQ Both Legs</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Max force</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.three_pq_both_legs.max_force", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Max power</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.three_pq_both_legs.max_power", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>max power negative</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.three_pq_both_legs.max_power_negative",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Average peak power</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.three_pq_both_legs.average_peak_power",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Average peak power negative</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.three_pq_both_legs.average_peak_power_negative",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Decrement</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.three_pq_both_legs.decrement", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Decrement negative</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.three_pq_both_legs.decrement_negative",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Stiffness Jump</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Jump height max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.stiffness_jump.jump_height_max",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Jump height average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.stiffness_jump.jump_height_average",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RSI max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.stiffness_jump.rsi_max", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>RSI average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.stiffness_jump.rsi_average", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label></label>
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Standing Reach</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Base</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.standing_reach.base", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Touch</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.standing_reach.touch", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Height</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.standing_reach.height", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">CMJ</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Base</label>
              <input
                type="text"
                autoComplete="off"
                name="base"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.cmj.base", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Touch</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.cmj.touch", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reach height</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.cmj.reach_height", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Jump height</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.cmj.jump_height", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Maximal Jump</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Base</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.maximal_jump.base", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Touch</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.maximal_jump.touch", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reach Height</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.maximal_jump.reach_height", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Pro Agility</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Planned trial 1</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.planned_trial_1", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.pro_agility.planned_trial_1"
                    );
                    const t2 = getValues(
                      "performance_test.pro_agility.planned_trial_2"
                    );
                    setValue(
                      "performance_test.pro_agility.planned_max",
                      Math.max(t1, t2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Planned trial 2</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.planned_trial_2", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.pro_agility.planned_trial_1"
                    );
                    const t2 = getValues(
                      "performance_test.pro_agility.planned_trial_2"
                    );
                    setValue(
                      "performance_test.pro_agility.planned_max",
                      Math.max(t1, t2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reaction trial 1</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.reaction_trial_1", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.pro_agility.reaction_trial_1"
                    );
                    const t2 = getValues(
                      "performance_test.pro_agility.reaction_trial_2"
                    );
                    setValue(
                      "performance_test.pro_agility.reaction_max",
                      Math.max(t1, t2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reaction trial 2</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.reaction_trial_2", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.pro_agility.reaction_trial_1"
                    );
                    const t2 = getValues(
                      "performance_test.pro_agility.reaction_trial_2"
                    );
                    setValue(
                      "performance_test.pro_agility.reaction_max",
                      Math.max(t1, t2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Planned max</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.planned_max", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Reaction max</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pro_agility.reaction_max", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">10Yard Dash</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>trial 1</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.ten_yard_dash.trial_1", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.ten_yard_dash.trial_1"
                    );
                    const t2 = getValues(
                      "performance_test.ten_yard_dash.trial_2"
                    );
                    setValue(
                      "performance_test.ten_yard_dash.result_max",
                      Math.max(t1, t2)
                    );
                    setValue(
                      "performance_test.ten_yard_dash.result_average",
                      ((t1 + t2) / 2).toFixed(2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>trial 2</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.ten_yard_dash.trial_2", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.ten_yard_dash.trial_1"
                    );
                    const t2 = getValues(
                      "performance_test.ten_yard_dash.trial_2"
                    );
                    setValue(
                      "performance_test.ten_yard_dash.result_max",
                      Math.max(t1, t2)
                    );
                    setValue(
                      "performance_test.ten_yard_dash.result_average",
                      ((t1 + t2) / 2).toFixed(2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result max</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.ten_yard_dash.result_max", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result average</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.ten_yard_dash.result_average", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Reaction</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Trial 1 max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.trial_1_max", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.reaction.trial_1_max"
                    );
                    const t2 = getValues(
                      "performance_test.reaction.trial_2_max"
                    );
                    setValue(
                      "performance_test.reaction.result_max",
                      Math.max(t1, t2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trial 1 average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.trial_1_average", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.reaction.trial_1_average"
                    );
                    const t2 = getValues(
                      "performance_test.reaction.trial_2_average"
                    );
                    setValue(
                      "performance_test.reaction.result_average",
                      ((t1 + t2) / 2).toFixed(2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trial 2 max</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.trial_2_max", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.reaction.trial_1_max"
                    );
                    const t2 = getValues(
                      "performance_test.reaction.trial_2_max"
                    );
                    setValue(
                      "performance_test.reaction.result_max",
                      Math.max(t1, t2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trial 2 average</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.trial_2_average", {
                  valueAsNumber: true,
                  onChange: () => {
                    const t1 = getValues(
                      "performance_test.reaction.trial_1_average"
                    );
                    const t2 = getValues(
                      "performance_test.reaction.trial_2_average"
                    );
                    setValue(
                      "performance_test.reaction.result_average",
                      ((t1 + t2) / 2).toFixed(2)
                    );
                  },
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result max</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.result_max", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result average</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.reaction.result_average", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Pattern Jump</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Sagittal 10s</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pattern_jump.sagittal_10s", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Frontal 10s</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.pattern_jump.frontal_10s", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Push Up</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Time</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.push_up.time", {
                  valueAsNumber: true,
                })}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Repetiton</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register("performance_test.push_up.repetiton", {
                  valueAsNumber: true,
                })}
              />
            </li>
          </ul>
        </div>
        <div className="py-8 px-8 bg-white shadow-3xl rounded-3xl">
          <h2 className="text-xl font-bold mb-3">Medicine Ball Throwing</h2>
          <ul>
            <li className="flex justify-between items-center py-1">
              <label>Trial 1</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.medicine_ball_throwing.trial_1",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const t1 = getValues(
                        "performance_test.medicine_ball_throwing.trial_1"
                      );
                      const t2 = getValues(
                        "performance_test.medicine_ball_throwing.trial_2"
                      );
                      setValue(
                        "performance_test.medicine_ball_throwing.result_max",
                        Math.max(t1, t2)
                      );
                      setValue(
                        "performance_test.medicine_ball_throwing.result_average",
                        ((t1 + t2) / 2).toFixed(2)
                      );
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Trial 2</label>
              <input
                type="text"
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.medicine_ball_throwing.trial_2",
                  {
                    valueAsNumber: true,
                    onChange: () => {
                      const t1 = getValues(
                        "performance_test.medicine_ball_throwing.trial_1"
                      );
                      const t2 = getValues(
                        "performance_test.medicine_ball_throwing.trial_2"
                      );
                      setValue(
                        "performance_test.medicine_ball_throwing.result_max",
                        Math.max(t1, t2)
                      );
                      setValue(
                        "performance_test.medicine_ball_throwing.result_average",
                        ((t1 + t2) / 2).toFixed(2)
                      );
                    },
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result max</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.medicine_ball_throwing.result_max",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
            <li className="flex justify-between items-center py-1">
              <label>Result average</label>
              <input
                type="text"
                disabled
                className="w-16 h-8 border text-center rounded-sm focus:outline-yellow-400"
                {...register(
                  "performance_test.medicine_ball_throwing.result_average",
                  {
                    valueAsNumber: true,
                  }
                )}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-16 col-start-1 col-end-4 text-center">
        <button
          type="submit"
          className="bg py-4 px-14 bg-yellow-400 rounded-3xl text-xl"
        >
          등록하기
        </button>
      </div>
    </form>
  );
};

export default PeriodicWrite;
